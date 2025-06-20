import React, { useCallback } from "react";
import serviceobject from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import RTE from "../RTE";
import Input from "../Input";
import Button from "../Button";


function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm();
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? serviceobject.uploadfile(data.image[0])
        : null;
      if (file) {
        serviceobject.deletefile(post.featuredimage);
      }
      const dbPost = await serviceobject.updatepost(post.$id, {
        ...data,
        featuredimage: file ? file.$id : undefined,
        if(dbPost) {
          navigate(`/post/${dbPost.$id}`);
        },
      });
    } else {
      const file = data.image[0]
        ? serviceobject.uploadfile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredimage = fileId;
        const dbPost = await serviceobject.createPost({
          ...data,
          userid: userData.$id,
          if(dbPost) {
            navigate(`/post/${dbPost.$id}`);
          },
        });
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscribe= watch((value, info)=>{
      if (info.name=== 'title') {
        setValue("slug", slugTransform(value.title), {shouldValidate:true})
      }

    })
  
    return () => {
      subscribe.unsubscribe()
    }
  }, [ watch, slugTransform, setValue])
  

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm;
