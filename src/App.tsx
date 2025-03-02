import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import ResourceCard from "./components/ResourceCard";
import ResourceTypeFilter from "./components/ResourceTypeFilter";
import ReadmeContent from "./components/ReadmeContent";
import HowToUse from "./components/HowToUse";
import Contact from "./components/Contact";

import NoResourcesMessage from "./components/NoResourcesMessage";
import { resources as initialResources } from "./data/resources";
import { categories } from "./data/categories";
import { supabase } from "./lib/supabase";
import { Resource } from "./types";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    localStorage.getItem("selectedLanguage")
  );
  const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] =
    useState<string | null>(
      localStorage.getItem("selectedProgrammingLanguage")
    );
  const [showFeatured, setShowFeatured] = useState<boolean>(
    selectedCategory === null && selectedContentType === null
  );

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase
          .from("resources")
          .select("*")
          .eq("approved", true);

        if (error) {
          console.error("Error fetching resources:", error);
          return;
        }

        if (data && data.length > 0) {
          // Combine initial resources with approved resources from Supabase
          const combinedResources = [...initialResources];

          // Add only new resources that don't exist in initialResources
          data.forEach((resource) => {
            if (!initialResources.some((r) => r.id === resource.id)) {
              combinedResources.push(resource as Resource);
            }
          });

          setResources(combinedResources);
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  // Save selected filters to localStorage when they change
  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);
    } else {
      localStorage.removeItem("selectedLanguage");
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (selectedProgrammingLanguage) {
      localStorage.setItem(
        "selectedProgrammingLanguage",
        selectedProgrammingLanguage
      );
    } else {
      localStorage.removeItem("selectedProgrammingLanguage");
    }
  }, [selectedProgrammingLanguage]);

  // Update featured state when category or content type changes
  useEffect(() => {
    setShowFeatured(
      selectedCategory === null &&
        selectedContentType === null &&
        searchQuery === ""
    );
  }, [selectedCategory, selectedContentType, searchQuery]);

  const filteredResources = resources.filter((resource) => {
    // Filter by main category
    const matchesCategory = selectedCategory
      ? resource.categories.includes(selectedCategory)
      : true;

    // Filter by content type
    const matchesContentType = selectedContentType
      ? resource.categories.includes(selectedContentType)
      : true;

    // Filter by language (for YouTube resources and playlists)
    const matchesLanguage = selectedLanguage
      ? resource.type === "youtube" || resource.type === "playlist"
        ? resource.language === selectedLanguage
        : true
      : true;

    // Filter by programming language
    const matchesProgrammingLanguage = selectedProgrammingLanguage
      ? resource.categories.includes(selectedProgrammingLanguage)
      : true;

    // Filter by search query
    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (resource.tags &&
            resource.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            ));

    return (
      matchesCategory &&
      matchesContentType &&
      matchesLanguage &&
      matchesProgrammingLanguage &&
      matchesSearch
    );
  });

  // Check if we're showing the about content or its subcategories
  const showAboutContent = selectedCategory === "about";
  const showHowToUse = selectedCategory === "how-to-use";
  const showContact = selectedCategory === "contact";

  // Check if we need to show the "no resources" message for language filtering
  const showNoResourcesForLanguage =
    selectedLanguage &&
    (selectedContentType === "youtube" ||
      selectedContentType === "playlists") &&
    filteredResources.length === 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
              <div className="flex items-center">
                <div className="md:hidden mr-2">
                  <MobileMenu
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {selectedCategory
                    ? categories.find((c) => c.id === selectedCategory)?.name
                    : showFeatured
                    ? "Featured Resources"
                    : "All Resources"}
                </h1>
              </div>

              {!showAboutContent && !showHowToUse && !showContact && (
                <div className="relative w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>

            {!showAboutContent && !showHowToUse && !showContact && (
              <ResourceTypeFilter
                selectedCategory={selectedCategory}
                selectedType={selectedContentType}
                onSelectType={setSelectedContentType}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                selectedProgrammingLanguage={selectedProgrammingLanguage}
                setSelectedProgrammingLanguage={setSelectedProgrammingLanguage}
              />
            )}

            {showAboutContent ? (
              <ReadmeContent />
            ) : showHowToUse ? (
              <HowToUse />
            ) : showContact ? (
              <Contact />
            ) : loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : showNoResourcesForLanguage ? (
              <NoResourcesMessage
                language={selectedLanguage}
                onSwitchToEnglish={() => setSelectedLanguage(null)}
              />
            ) : filteredResources.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No resources found. Try adjusting your search or category
                  filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
