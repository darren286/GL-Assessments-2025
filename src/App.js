import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const AcademicPerformanceDashboard = () => {
  const [selectedView, setSelectedView] = useState('cognitive');

  // Define color scheme
  const colors = {
    isj: "#3b82f6",
    isjExpected: "#60a5fa",
    ukNational: "#6b7280",
    ukIndependent: "#10b981",
    international: "#8b5cf6"
  };

  // Data for Cognitive Ability (CAT4)
  const cognitiveData = [
    { year: 'Year 3', isj: 98.4, isjExpected: 105.4, ukNational: 100, ukIndependent: 110, international: 115 },
    { year: 'Year 4', isj: 97.7, isjExpected: 104.7, ukNational: 100, ukIndependent: 110, international: 115 },
    { year: 'Year 5', isj: 103.2, isjExpected: 110.2, ukNational: 100, ukIndependent: 115, international: 120 },
    { year: 'Year 6', isj: 104.5, isjExpected: 111.5, ukNational: 100, ukIndependent: 115, international: 120 },
    { year: 'Year 7', isj: 120.7, isjExpected: 127.7, ukNational: 100, ukIndependent: 120, international: 125 }
  ];

  // Data for Reading Ability
  const readingData = [
    { year: 'Year 1', isj: 80, isjExpected: 87, ukNational: 80.5, ukIndependent: 87.5, international: 90 },
    { year: 'Year 3', isj: 99.2, isjExpected: 106.2, ukNational: 102.5, ukIndependent: 107.5, international: 115 },
    { year: 'Year 4', isj: 95.3, isjExpected: 102.3, ukNational: 105, ukIndependent: 112.5, international: 120 },
    { year: 'Year 5', isj: 97.4, isjExpected: 104.4, ukNational: 105, ukIndependent: 112.5, international: 122.5 },
    { year: 'Year 6', isj: 107.7, isjExpected: 114.7, ukNational: 105, ukIndependent: 115, international: 122.5 },
    { year: 'Year 7', isj: 105.3, isjExpected: 112.3, ukNational: 107.5, ukIndependent: 117.5, international: 125 }
  ];

  // Data for Maths
  const mathsData = [
    { year: 'Year 3', isj: 96.7, isjExpected: 103.7, ukNational: 100, ukIndependent: 110, international: 122.5 },
    { year: 'Year 4', isj: 98.3, isjExpected: 105.3, ukNational: 100, ukIndependent: 115, international: 127.5 },
    { year: 'Year 5', isj: 101.8, isjExpected: 108.8, ukNational: 100, ukIndependent: 115, international: 127.5 },
    { year: 'Year 6', isj: 100.8, isjExpected: 107.8, ukNational: 100, ukIndependent: 115, international: 127.5 },
    { year: 'Year 7', isj: 110.7, isjExpected: 117.7, ukNational: 105, ukIndependent: 120, international: 132.5 }
  ];

  // Data for Science
  const scienceData = [
    { year: 'Year 3', isj: 99.4, isjExpected: 106.4, ukNational: 100, ukIndependent: 110, international: 122.5 },
    { year: 'Year 4', isj: 97.4, isjExpected: 104.4, ukNational: 100, ukIndependent: 115, international: 127.5 },
    { year: 'Year 5', isj: 100.5, isjExpected: 107.5, ukNational: 100, ukIndependent: 115, international: 127.5 },
    { year: 'Year 6', isj: 100.5, isjExpected: 107.5, ukNational: 100, ukIndependent: 115, international: 127.5 },
    { year: 'Year 7', isj: 116.0, isjExpected: 123.0, ukNational: 105, ukIndependent: 120, international: 132.5 }
  ];

  // Data for Radar Chart (Year 7 only)
  const radarData = [
    { subject: 'Cognitive Ability', isj: 120.7, isjExpected: 127.7, ukNational: 100, ukIndependent: 120, international: 125, fullMark: 140 },
    { subject: 'Reading', isj: 105.3, isjExpected: 112.3, ukNational: 107.5, ukIndependent: 117.5, international: 125, fullMark: 140 },
    { subject: 'Mathematics', isj: 110.7, isjExpected: 117.7, ukNational: 105, ukIndependent: 120, international: 132.5, fullMark: 140 },
    { subject: 'Science', isj: 116.0, isjExpected: 123.0, ukNational: 105, ukIndependent: 120, international: 132.5, fullMark: 140 }
  ];

  // Gap analysis data - difference between ISJ Expected and International benchmarks
  const gapData = [
    { subject: 'Cognitive (Y3-Y4)', gap: 10 },
    { subject: 'Cognitive (Y5-Y6)', gap: 8.5 },
    { subject: 'Cognitive (Y7)', gap: -2.7 },
    { subject: 'Reading (Y1-Y3)', gap: 8.8 },
    { subject: 'Reading (Y4-Y5)', gap: 17.7 },
    { subject: 'Reading (Y6-Y7)', gap: 12.7 },
    { subject: 'Maths (Y3-Y4)', gap: 22.5 },
    { subject: 'Maths (Y5-Y6)', gap: 19.2 },
    { subject: 'Maths (Y7)', gap: 14.8 },
    { subject: 'Science (Y3-Y4)', gap: 18.1 },
    { subject: 'Science (Y5-Y6)', gap: 20 },
    { subject: 'Science (Y7)', gap: 9.5 }
  ];

  // Function to get current data based on selected view
  const getCurrentData = () => {
    switch (selectedView) {
      case 'cognitive':
        return cognitiveData;
      case 'reading':
        return readingData;
      case 'maths':
        return mathsData;
      case 'science':
        return scienceData;
      case 'radar':
        return radarData;
      case 'gap':
        return gapData;
      default:
        return cognitiveData;
    }
  };

  // Title for the current view
  const getViewTitle = () => {
    switch (selectedView) {
      case 'cognitive':
        return 'Cognitive Ability (CAT4) Comparison';
      case 'reading':
        return 'Reading Ability Comparison';
      case 'maths':
        return 'Mathematics Performance Comparison';
      case 'science':
        return 'Science Performance Comparison';
      case 'radar':
        return 'Year 7 Performance Across All Subjects';
      case 'gap':
        return 'Gap Analysis: ISJ Expected vs International Benchmarks';
      default:
        return '';
    }
  };

  // Function to render chart based on selected view
  const renderChart = () => {
    const data = getCurrentData();

    if (selectedView === 'radar') {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={150} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 140]} />
            <Radar name="ISJ Current" dataKey="isj" stroke={colors.isj} fill={colors.isj} fillOpacity={0.3} />
            <Radar name="ISJ Expected" dataKey="isjExpected" stroke={colors.isjExpected} fill={colors.isjExpected} fillOpacity={0.3} />
            <Radar name="UK National" dataKey="ukNational" stroke={colors.ukNational} fill={colors.ukNational} fillOpacity={0.3} />
            <Radar name="UK Independent" dataKey="ukIndependent" stroke={colors.ukIndependent} fill={colors.ukIndependent} fillOpacity={0.3} />
            <Radar name="International" dataKey="international" stroke={colors.international} fill={colors.international} fillOpacity={0.3} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      );
    } else if (selectedView === 'gap') {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[-5, 25]} />
            <YAxis dataKey="subject" type="category" width={120} />
            <Tooltip formatter={(value) => [`${value} points`, 'Gap to International']} />
            <Legend />
            <Bar dataKey="gap" name="Gap to International Benchmark" fill={value => value < 0 ? colors.ukIndependent : colors.international} />
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[80, 140]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="isj" name="ISJ Current" stroke={colors.isj} strokeWidth={2} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="isjExpected" name="ISJ Expected" stroke={colors.isjExpected} strokeWidth={2} strokeDasharray="5 5" dot={{ r: 5 }} />
            <Line type="monotone" dataKey="ukNational" name="UK National Avg" stroke={colors.ukNational} strokeWidth={2} />
            <Line type="monotone" dataKey="ukIndependent" name="UK Independent Schools" stroke={colors.ukIndependent} strokeWidth={2} />
            <Line type="monotone" dataKey="international" name="International Schools" stroke={colors.international} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  };

  // Insights based on the data
  const getInsights = () => {
    switch (selectedView) {
      case 'cognitive':
        return (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700">Key Insights:</h3>
            <p className="text-blue-800 mt-2">✅ Cognitive ability increases steadily at ISJ, closing the gap to independent schools.</p>
            <p className="text-blue-800">✅ By Year 7, ISJ students match or exceed top-tier international school performance.</p>
            <p className="text-amber-700 mt-2">⚠️ Action Point: Focus on problem-solving skills in Years 3-4 to reach top independent school standards sooner.</p>
          </div>
        );
      case 'reading':
        return (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700">Key Insights:</h3>
            <p className="text-blue-800 mt-2">✅ ISJ's expected progress will align with UK independent school standards in Years 6-7.</p>
            <p className="text-blue-800">✅ Reading gaps in Years 3-5 are expected to close, but international schools remain ahead.</p>
            <p className="text-amber-700 mt-2">⚠️ Action Point: Early fluency & comprehension training (Years 3-5) is key to matching top schools.</p>
          </div>
        );
      case 'maths':
        return (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700">Key Insights:</h3>
            <p className="text-blue-800 mt-2">✅ ISJ will reach independent school standards by Year 7 but remain behind international schools.</p>
            <p className="text-amber-700 mt-2">⚠️ Action Point: Introduce advanced problem-solving strategies (Years 3-6) to match international schools.</p>
          </div>
        );
      case 'science':
        return (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700">Key Insights:</h3>
            <p className="text-blue-800 mt-2">✅ Science is expected to align with independent schools by Year 7 but still trails international benchmarks.</p>
            <p className="text-amber-700 mt-2">⚠️ Action Point: Expand practical, inquiry-based learning (Years 3-6) to match global standards.</p>
          </div>
        );
      case 'radar':
        return (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700">Year 7 Performance Overview:</h3>
            <p className="text-blue-800 mt-2">✅ Strongest areas: Cognitive Ability (exceeding UK independent schools)</p>
            <p className="text-blue-800">✅ Science shows strong improvement, approaching independent school standards</p>
            <p className="text-amber-700 mt-2">⚠️ Most room for growth: Reading and Mathematics compared to international benchmarks</p>
          </div>
        );
      case 'gap':
        return (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700">Gap Analysis Insights:</h3>
            <p className="text-blue-800 mt-2">✅ Cognitive ability in Year 7 exceeds international benchmarks by 2.7 points</p>
            <p className="text-amber-700 mt-2">⚠️ Largest gaps: Mathematics and Science in early years (18-22 point gap)</p>
            <p className="text-blue-800">✅ All gaps narrow by Year 7, indicating effective teaching strategies</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">ISJ Academic Performance Analysis</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button 
          onClick={() => setSelectedView('cognitive')} 
          className={`px-4 py-2 rounded-lg font-medium ${selectedView === 'cognitive' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Cognitive
        </button>
        <button 
          onClick={() => setSelectedView('reading')} 
          className={`px-4 py-2 rounded-lg font-medium ${selectedView === 'reading' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Reading
        </button>
        <button 
          onClick={() => setSelectedView('maths')} 
          className={`px-4 py-2 rounded-lg font-medium ${selectedView === 'maths' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Mathematics
        </button>
        <button 
          onClick={() => setSelectedView('science')} 
          className={`px-4 py-2 rounded-lg font-medium ${selectedView === 'science' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Science
        </button>
        <button 
          onClick={() => setSelectedView('radar')} 
          className={`px-4 py-2 rounded-lg font-medium ${selectedView === 'radar' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Year 7 Overview
        </button>
        <button 
          onClick={() => setSelectedView('gap')} 
          className={`px-4 py-2 rounded-lg font-medium ${selectedView === 'gap' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Gap Analysis
        </button>
      </div>
      
      <h2 className="text-xl font-semibold mb-4 text-center">{getViewTitle()}</h2>
      
      {renderChart()}
      
      {getInsights()}
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-700">Final Recommendations:</h3>
        <div className="mt-2">
          <p className="text-green-700 font-medium">✅ Strengths:</p>
          <ul className="list-disc ml-8 text-green-800">
            <li>ISJ is expected to match UK independent school performance in most subjects by Year 7.</li>
            <li>Science, maths, and reading show strong year-over-year improvement.</li>
            <li>Cognitive ability is a standout area, exceeding international benchmarks in Year 7.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-amber-700 font-medium">⚠️ Areas for Improvement:</p>
          <ul className="list-disc ml-8 text-amber-800">
            <li>Reading & maths in Years 3-5 remain below independent & international benchmarks.</li>
            <li>Science lags behind top-performing international schools (PISA, IB).</li>
            <li>Early interventions in reasoning skills (Years 3-4) could further boost CAT4 scores.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicPerformanceDashboard;
