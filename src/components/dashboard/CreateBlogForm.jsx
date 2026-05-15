import React from 'react'
import { useForm } from 'react-hook-form'

const CreateBlogForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    reset()
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-(--text-primary)">
        Create Blog
      </h1>

      <p className="mt-3 text-(--text-secondary)">
        Share technical knowledge with developers.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 max-w-3xl space-y-5"
      >
        {/* TITLE */}
        <div>
          <input
            type="text"
            placeholder="Blog Title"
            {...register("title", {
              required: "Blog title is required",
            })}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-400">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* CONTENT */}
        <div>
          <textarea
            rows="8"
            placeholder="Write your article..."
            {...register("content", {
              required: "Content is required",
            })}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />

          {errors.content && (
            <p className="mt-2 text-sm text-red-400">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* TAGS */}
        <div>
          <input
            type="text"
            placeholder="Tags"
            {...register("tags")}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />
        </div>

        <button className="rounded-2xl bg-(--accent) px-7 py-3 font-semibold text-black">
          Publish Blog
        </button>
      </form>
    </div>
  )
}

export default CreateBlogForm