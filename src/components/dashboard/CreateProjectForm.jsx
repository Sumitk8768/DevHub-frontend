import React from 'react'
import { useForm } from 'react-hook-form'

const CreateProjectForm = () => {
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
        Create Project
      </h1>

      <p className="mt-3 text-(--text-secondary)">
        Add a new project to your portfolio.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 max-w-3xl space-y-5"
      >
        {/* TITLE */}
        <div>
          <input
            type="text"
            placeholder="Project Title"
            {...register("title", {
              required: "Project title is required",
            })}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-400">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <textarea
            rows="5"
            placeholder="Project Description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* TECH STACK */}
        <div>
          <input
            type="text"
            placeholder="Tech Stack"
            {...register("techStack")}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />
        </div>

        {/* GITHUB */}
        <div>
          <input
            type="text"
            placeholder="GitHub Link"
            {...register("github")}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />
        </div>

        {/* LIVE */}
        <div>
          <input
            type="text"
            placeholder="Live Demo Link"
            {...register("live")}
            className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
          />
        </div>

        <button className="rounded-2xl bg-(--accent) px-7 py-3 font-semibold text-black">
          Publish Project
        </button>
      </form>
    </div>
  )
}

export default CreateProjectForm