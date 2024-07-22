"use client"
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const ScrollCard = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!scrollRef.current) return;
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    };
  
    const onMouseLeave = () => {
      setIsDragging(false);
    };
  
    const onMouseUp = () => {
      setIsDragging(false);
    };
  
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };
  
    return (
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
         <div className="flex gap-8 p-10">
        {Array.from({length:5}).map((val, i)=>(
            <div key={i}>
            <Card className="min-w-[350px] bg-[#eeebfe] rounded-2xl hover:-rotate-6 transition-all">
              <CardHeader>
                <CardTitle className="text-4xl">😃</CardTitle>
                <CardDescription className="font-extrabold text-lg text-black">You get a promotion at work</CardDescription>
              </CardHeader>
              <CardContent className="-mt-4">
                You question yourself and wonder when they'll realize you're an unquallified imposter, instead oof trusting yourself & your abilities
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      </div>
        
    );
  };
  
  export default ScrollCard;
