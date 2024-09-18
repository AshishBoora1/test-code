"use client"
import React, { useContext, createContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
export const Context = createContext({
  SubmitMessage: () => {},
});

export default function ContextProvider({ children }) {
  const [getprojectsdata, setGetProjectsData] = useState([]);
  const [loading, setloading] = useState(true);
  const SubmitMessage = async (getmessage) => {
    setloading(true);
    try {
      await addDoc(collection(db, "enquiry"), getmessage);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  useEffect(() => {
    async function GetProjectsData() {
      setloading(true);
      try {
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        const projectsData = [];
        querySnapshot.forEach((doc) => {
          projectsData.push(doc.data());
        });
        setGetProjectsData(projectsData);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }

    GetProjectsData();
  }, []);
  return (
    <Context.Provider
      value={{ SubmitMessage, getprojectsdata, loading, setloading }}
    >
      {children}
    </Context.Provider>
  );
}

export function GetData() {
  return useContext(Context);
}
