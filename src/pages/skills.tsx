import React, { useState, useEffect, useMemo } from "react";
import { Plus, BookOpen, Filter, Star, TrendingUp, Search, CheckCircle, X } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  isCustom: boolean;
  description: string;
}

interface UserSkill {
  skillId: string;
}

interface User {
  userSkills: UserSkill[];
}

const dummySkills: Skill[] = [
  { id: '1', name: 'JavaScript', category: 'Programming', isCustom: false, description: 'High-level, often just-in-time compiled language that conforms to the ECMAScript standard.' },
  { id: '2', name: 'React', category: 'Programming', isCustom: false, description: 'A JavaScript library for building user interfaces.' },
  { id: '3', name: 'Node.js', category: 'Programming', isCustom: true, description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
  { id: '4', name: 'Python', category: 'Programming', isCustom: false, description: 'An interpreted, high-level and general-purpose programming language.' },
  { id: '5', name: 'Graphic Design', category: 'Design', isCustom: false, description: 'The art or skill of combining text and pictures in advertisements, magazines, or books.' },
  { id: '6', name: 'UI/UX Design', category: 'Design', isCustom: false, description: 'User interface and user experience design.' },
  { id: '7', name: 'Digital Marketing', category: 'Marketing', isCustom: false, description: 'The component of marketing that utilizes internet and online based digital technologies.' },
  { id: '8', name: 'SEO', category: 'Marketing', isCustom: false, description: 'Search engine optimization.' },
  { id: '9', name: 'Public Speaking', category: 'Communication', isCustom: true, description: 'The process or act of performing a speech to a live audience.' },
];

const dummyUser: User = {
  userSkills: [{ skillId: '1' }, { skillId: '2' }, { skillId: '5' }]
};

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  const [user] = useState<User | null>(dummyUser);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', category: '', description: '' });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTimeout(() => {
        setSkills(dummySkills);
        const uniqueCategories = Array.from(new Set(dummySkills.map(s => s.category)));
        setCategories(uniqueCategories);
        setLoading(false);
      }, 5000);
    };
    loadData();
  }, []);

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    skills.forEach(skill => {
      stats[skill.category] = (stats[skill.category] || 0) + 1;
    });
    return stats;
  }, [skills]);

  const filteredSkills = useMemo(() => {
    let result = skills;
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        skill => skill.name.toLowerCase().includes(lowerSearch) || 
                 skill.description.toLowerCase().includes(lowerSearch)
      );
    }
    if (selectedCategory) {
      result = result.filter(skill => skill.category === selectedCategory);
    }
    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      if (sortBy === 'popular') return a.id.localeCompare(b.id);
      return 0;
    });
    return result;
  }, [skills, searchTerm, selectedCategory, sortBy]);

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const addedSkill: Skill = {
        id: Math.random().toString(36).substr(2, 9),
        name: newSkill.name,
        category: newSkill.category,
        description: newSkill.description,
        isCustom: true,
      };
      setSkills(prev => [...prev, addedSkill]);
      if (!categories.includes(newSkill.category)) {
        setCategories(prev => [...prev, newSkill.category]);
      }
      setShowAddSkill(false);
      setNewSkill({ name: '', category: '', description: '' });
      setLoading(false);
    }, 500);
  };

     if (loading && skills.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="mt-4 text-gradient">Loading skills...</p>
        </div>
      </div>
    );
  }  
  return (
    <>
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Head */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Skills</h1>
            <p className="text-gradient mt-2">Explore and discover skills available on the platform</p>
          </div>
          <button
            onClick={() => setShowAddSkill(true)}
            className="btn-gradient hover:cursor-pointer flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Skill</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-secondary/5 border-2 border-secondary rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out  p-4">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div className="ml-3">
                <p className="text-md font-medium text-gradient">Total Skills</p>
                <p className="text-2xl font-bold text-gray-600">{skills.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary/5 border-2 border-secondary rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out  p-4">
            <div className="flex items-center">
              <Filter className="w-8 h-8 text-green-600" />
              <div className="ml-3">
                <p className="text-md font-medium text-gradient">Categories</p>
                <p className="text-2xl font-bold text-gray-600">{categories.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary/5 border-2 border-secondary rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out  p-4">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-yellow-600" />
              <div className="ml-3">
                <p className="text-md font-medium text-gradient">Custom Skills</p>
                <p className="text-2xl font-bold text-gray-600">
                  {skills.filter(s => s.isCustom).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary/5 border-2 border-secondary rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out  p-4">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <div className="ml-3">
                <p className="text-md font-medium text-gradient">Your Skills</p>
                <p className="text-2xl font-bold text-gray-600">
                  {user?.userSkills?.length || 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white border-2 border-secondary rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category} ({categoryStats[category] || 0})
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="popular">Sort by Popularity</option>
              </select>
              <div className="flex border border-gray-300 rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid/List */}
      {filteredSkills.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
          <p className="text-gray-600">
            {searchTerm || selectedCategory ? 'Try adjusting your search or filters' : 'No skills available yet'}
          </p>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`bg-white rounded-lg border-2 border-secondary cursor-pointer hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex items-center border-2 border-secondary cursor-pointer p-4' : 'p-6'
              }`}
            >
              {viewMode === 'grid' ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gradient mb-1">{skill.name}</h3>
                      <p className="text-md text-secondary font-semibold mb-2">{skill.category}</p>
                    </div>
                    {skill.isCustom && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Custom
                      </span>
                    )}
                  </div>
                  {skill.description && (
                    <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                  )}
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">
                      {user?.userSkills?.some(us => us.skillId === skill.id) ? (
                        <span className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Added to profile
                        </span>
                      ) : (
                        'Not in your profile'
                      )}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      {skill.isCustom && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Custom
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{skill.category}</p>
                    {skill.description && (
                      <p className="text-gray-700 text-sm mt-1">{skill.description}</p>
                    )}
                  </div>
                  <div className="ml-4">
                    {user?.userSkills?.some(us => us.skillId === skill.id) ? (
                      <span className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Added
                      </span>
                    ) : (
                      <span className="text-gray-500 text-sm">Not added</span>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Add Skill Modal */}
      {showAddSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add Custom Skill</h3>
              <button
                onClick={() => setShowAddSkill(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Name *
                </label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Advanced JavaScript"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newSkill.description}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Brief description of the skill..."
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddSkill(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Skill'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Skills; 
