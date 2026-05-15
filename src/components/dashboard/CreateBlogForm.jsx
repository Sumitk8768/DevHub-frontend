import React, { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import api from "../../services/api";

import { Blog } from "../../context/BlogContext";

const CreateBlogForm = ({ editingBlog, setEditingBlog }) => {
  const { setBlogs } = useContext(Blog);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // PREFILL
  useEffect(() => {
    if (editingBlog) {
      reset(editingBlog);
    }
  }, [editingBlog, reset]);

  // SUBMIT
  const onSubmit = async (data) => {
    try {
      // UPDATE
      if (editingBlog) {
        const response = await api.put(`/blogs/${editingBlog._id}`, data);

        setBlogs((prev) =>
          prev.map((blog) =>
            blog._id === editingBlog._id ? response.data.blog : blog,
          ),
        );

        toast.success("Blog updated successfully");
      }

      // CREATE
      else {
        const response = await api.post("/blogs", data);

        setBlogs((prev) => [response.data.blog, ...prev]);

        toast.success("Blog published successfully");
      }

    setEditingBlog(null)

reset({
  title: "",
  content: "",
  tags: "",
  read: "",
})
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-(--text-primary)">
        {editingBlog ? "Edit Blog" : "Create Blog"}
      </h1>

      <p className="mt-3 text-(--text-secondary)">
        Share technical knowledge with developers.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 max-w-3xl space-y-5"
      >
        <input
          type="text"
          placeholder="Blog Title"
          {...register("title")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />

        <textarea
          rows="8"
          placeholder="Write your article..."
          {...register("content")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />

        <input
          type="text"
          placeholder="Tags"
          {...register("tags")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />


        <button
          disabled={isSubmitting}
          className="rounded-2xl bg-(--accent) px-7 py-3 font-semibold text-black"
        >
          {isSubmitting
            ? "Saving..."
            : editingBlog
              ? "Update Blog"
              : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
