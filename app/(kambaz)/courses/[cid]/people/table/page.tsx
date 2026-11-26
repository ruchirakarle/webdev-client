"use client";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../Table";
import * as client from "../../../client";
import type { User } from "../../../../account/AccountContext";
export default function CoursePeople() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = useCallback(async () => {
    const data = await client.findUsersForCourse(courseId);
    setUsers(data);
  }, [courseId]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, [fetchUsers]);
  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}