'use client';
import Left from "@/components/Left";
import Middle from "@/components/Middle";
import Right from "@/components/Right";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";  

export default function Home() {

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left/>
      <Middle />
      <Right />
    </div>
  );
}
