"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import { emptyCourse, useCoursesStore, type Course } from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const [myCourseIds, setMyCourseIds] = useState<string[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const fetchCourseData = async () => {
    const all: Course[] = await client.fetchAllCourses();
    const mine: Course[] = currentUser ? await client.findMyCourses() : [];
    return { all, mineIds: mine.map((c) => c._id) };
  };
  const applyCourseData = (data: { all: Course[]; mineIds: string[] }) => {
    setCourses(data.all);
    setMyCourseIds(data.mineIds);
  };
  const loadCourses = async () => {
    try {
      applyCourseData(await fetchCourseData());
    } catch {
      setCourses([]);
    }
  };
  useEffect(() => {
    fetchCourseData()
      .then(applyCourseData)
      .catch(() => setCourses([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  const onAddCourse = async () => {
    await client.createCourse(course);
    await loadCourses();
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    await loadCourses();
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    await loadCourses();
  };
  const onToggleEnrollment = async (courseId: string) => {
    if (!currentUser) return;
    if (myCourseIds.includes(courseId)) {
      await client.unenrollFromCourse(currentUser._id, courseId);
    } else {
      await client.enrollIntoCourse(currentUser._id, courseId);
    }
    await loadCourses();
  };
  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => myCourseIds.includes(c._id))
      : courses;
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button type="button" id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
            Enrollments
          </button>
        )}
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button type="button" id="wd-add-new-course-click" onClick={onAddCourse}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
          Add
        </button>
        <button type="button" id="wd-update-course-click" onClick={onUpdateCourse}
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium">
          Update
        </button>
      </h5>
      <input id="wd-course-name"
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea id="wd-course-description" rows={3}
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <input id="wd-course-number" placeholder="Course number"
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input id="wd-course-start-date" type="date"
        className="mb-3 block rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            showEnrollment={!!currentUser}
            enrolled={myCourseIds.includes(c._id)}
            onToggleEnrollment={() => onToggleEnrollment(c._id)}
          />
        ))}
      </div>
    </div>
  );
}