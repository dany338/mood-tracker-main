"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Modal from "../../../components/modal/modal";
import Sidebar from "../../../components/sidebar/sidebar";
import Mood from "../../../components/mood/mood";
import { getAllMoodTrackersByUser } from "@/actions/mood-tracker/get-all-mood-trackers-by-user";
import { createMoodTrackerByUser } from "@/actions/mood-tracker/create-mood-tracker-by-user";

const inter = Inter({ subsets: ["latin"] });

const ClientDashboard = ({ session }: any) => {
  const [moodList, setMoodList] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const scollToRef = useRef<any>(null);

  const fetchMoodTrackers = useCallback(async () => {
    try {
      const moodTrackers = await getAllMoodTrackersByUser();
      setMoodList(moodTrackers.map((tracker: any) => ({
        mood: tracker.type,
        date: tracker.created_at
      })));
    } catch (error) {
      console.error('Error fetching mood trackers:', error);
    }
  }, []);

  const fetchCreateMoodTracker = useCallback(async (mood: string) => {
    try {
      const moodTracker = await createMoodTrackerByUser(mood);
    } catch (error) {
      console.error('Error creating mood tracker:', error);
    }
  }, []);

  const updateMood = (newMood: any) => {
    const date = new Date();
    setMoodList((currentMood: any) => [...currentMood, { mood: newMood, date }]);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('mood', newMood);

    router.push(newUrl.toString());
    setShowModal(false);
    scollToRef?.current?.scrollIntoView();
    fetchCreateMoodTracker(newMood);
  };

  useEffect(() => {
    if (session?.user?.token) {
      localStorage.setItem("token", session.user.token);
    }
    fetchMoodTrackers();
  }, [session, fetchMoodTrackers]);

  return (
    <main className={clsx(inter.className, "main")}>
      <Modal
        showModal={showModal}
        updateMood={updateMood}
        closeModal={() => setShowModal(false)}
      />
      <Mood />
      <Sidebar moodList={moodList} setShowModal={setShowModal}>
        <div ref={scollToRef} />
      </Sidebar>
    </main>
  );
};

export default ClientDashboard;
