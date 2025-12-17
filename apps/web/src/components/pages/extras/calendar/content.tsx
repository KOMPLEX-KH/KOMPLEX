'use client';

import { useState, useEffect } from 'react';

export default function CalendarContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  
  // National Examination Date - Change this to the actual exam date
  const nationalExamDate = new Date(2026, 5, 15); // June 15, 2026

  // Calculate countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Simulate initial loading
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const examTime = nationalExamDate.getTime();
      const distance = examTime - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 border border-gray-100"></div>);
    }

    // Actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();
      
      const isSelected = 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      const isExamDay = 
        date.getDate() === nationalExamDate.getDate() &&
        date.getMonth() === nationalExamDate.getMonth() &&
        date.getFullYear() === nationalExamDate.getFullYear();

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`h-16 border border-gray-100 p-2 cursor-pointer transition-all hover:bg-blue-50 flex items-center justify-center relative ${
            isToday ? 'bg-blue-100 border-blue-400 font-bold' : ''
          } ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''} ${
            isExamDay ? 'bg-red-100 border-red-400' : ''
          }`}
        >
          <div className={`text-sm ${isToday ? 'text-blue-700 font-bold' : isExamDay ? 'text-red-700 font-bold' : 'text-gray-700'}`}>
            {day}
          </div>
          {isExamDay && (
            <div className="absolute top-1 right-1">
              <span className="text-xs">📝</span>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  // Show skeleton while loading
  // if (isLoading) {
  //   return <CalendarSkeleton />;
  // }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* National Examination Countdown - Hero Section */}
        <div className="mb-10">
          <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-800 rounded-3xl  p-8 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">
                ថ្ងៃប្រឡង បាក់ឌុប
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8">
                Time Until The Big Day
              </p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center items-center gap-3 md:gap-6 mb-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[90px] md:min-w-[120px] border border-white/20">
                  <div className="text-5xl md:text-7xl font-bold text-white mb-2">
                    {countdown.days}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base font-medium">Days</div>
                </div>
                <div className="text-white text-3xl md:text-5xl font-light">:</div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[90px] md:min-w-[120px] border border-white/20">
                  <div className="text-5xl md:text-7xl font-bold text-white mb-2">
                    {countdown.hours}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base font-medium">Hours</div>
                </div>
                <div className="text-white text-3xl md:text-5xl font-light">:</div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[90px] md:min-w-[120px] border border-white/20">
                  <div className="text-5xl md:text-7xl font-bold text-white mb-2">
                    {countdown.minutes}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base font-medium">Minutes</div>
                </div>
                <div className="text-white text-3xl md:text-5xl font-light">:</div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[90px] md:min-w-[120px] border border-white/20">
                  <div className="text-5xl md:text-7xl font-bold text-white mb-2">
                    {countdown.seconds}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base font-medium">Seconds</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-medium">
                  {nationalExamDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Calendar View */}
        <div className="bg-white rounded-3xl p-6 md:p-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goToPreviousMonth}
              className="p-3 hover:bg-gray-100 rounded-xl transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {monthNames[currentDate.getMonth()]}
              </h2>
              <p className="text-gray-500 text-lg mt-1">{currentDate.getFullYear()}</p>
            </div>
            <button
              onClick={goToNextMonth}
              className="p-3 hover:bg-gray-100 rounded-xl transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center font-bold text-gray-600 py-3 text-sm md:text-base">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {renderCalendarDays()}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-100 border-2 border-blue-400 rounded"></div>
                <span className="text-gray-600">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 border-2 border-red-400 rounded relative">
                  <span className="absolute -top-1 -right-1 text-xs">📝</span>
                </div>
                <span className="text-gray-600">Exam Day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-50 ring-2 ring-blue-500 rounded"></div>
                <span className="text-gray-600">Selected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}