// components/dashboard/CreateProjectForm.jsx

import React, { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import api from "../../services/api";

import { Project } from "../../context/ProjectContext";

const CreateProjectForm = ({ editingProject, setEditingProject }) => {
  const { setProjects } = useContext(Project);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // PREFILL
  useEffect(() => {
    if (editingProject) {
      reset(editingProject);
    }
  }, [editingProject, reset]);

  // SUBMIT
  const onSubmit = async (data) => {
    try {
      // UPDATE
      if (editingProject) {
        const response = await api.put(`/projects/${editingProject._id}`, data);

        setProjects((prev) =>
          prev.map((project) =>
            project._id === editingProject._id
              ? response.data.project
              : project,
          ),
        );

        toast.success("Project updated successfully");
      }

      // CREATE
      else {
        const response = await api.post("/projects", data);

        setProjects((prev) => [response.data.project, ...prev]);

        toast.success("Project created successfully");
      }

     setEditingProject(null)

reset({
  title: "",
  desc: "",
  techStack: "",
  github: "",
  liveDemo: "",
})
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-(--text-primary)">
        {editingProject ? "Edit Project" : "Create Project"}
      </h1>

      <p className="mt-3 text-(--text-secondary)">
        Publish and manage your developer projects.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 max-w-3xl space-y-5"
      >
        <input
          type="text"
          placeholder="Project Title"
          {...register("title")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />

        <textarea
          rows="5"
          placeholder="Project Description"
          {...register("desc")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />

        <input
          type="text"
          placeholder="Tech Stack"
          {...register("techStack")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />

        <input
          type="text"
          placeholder="GitHub Link"
          {...register("github")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />

        <input
          type="text"
          placeholder="Live Demo Link"
          {...register("liveDemo")}
          className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-4 text-(--text-primary) outline-none"
        />


        <button
          disabled={isSubmitting}
          className="rounded-2xl bg-(--accent) px-7 py-3 font-semibold text-black"
        >
          {isSubmitting
            ? "Saving..."
            : editingProject
              ? "Update Project"
              : "Publish Project"}
        </button>
      </form>
    </div>
  );
};

export default CreateProjectForm;
