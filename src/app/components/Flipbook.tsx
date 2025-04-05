"use client";
import HTMLFlipBook from "react-pageflip";
import { useRef, useEffect, useState } from "react";
import Page from "@/app/components/Page";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHome from "./PageHome";
import Cover from "./Cover";
import PageSkills from "./PageSkills";
import PageProjects from "./PageProjects";
import PageEducation from "./PageEducation";
import PageExperience from "./PageExperience";
import PageAchievements from "./PageAchievement";
import PageContact from "./PageContact";

export default function MyBook() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);

  const [clientWidth, setClientWidth] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  const nextPage = () => bookRef.current?.pageFlip()?.flipNext();
  const prevPage = () => bookRef.current?.pageFlip()?.flipPrev();

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const onFlip = (e: { data: number }) => setCurrentPage(e.data);
  const onInit = () => {
    const pageCount = bookRef.current.pageFlip().getPageCount();
    setTotalPages(pageCount);
  };

  // Handle key press events to navigate
  useEffect(() => {
    // Check if `window` is available (client-side only)
    if (typeof window !== "undefined") {
      setClientWidth(window.innerWidth);
      setClientHeight(window.innerHeight);

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          nextPage();
        } else if (event.key === "ArrowLeft") {
          prevPage();
        }
      };

      window.addEventListener("keydown", handleKeydown);

      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }
  }, []); // This effect runs only on the client side

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* Left Arrow */}
      {currentPage > 0 && (
        <button
          onClick={prevPage}
          title="Previous Page"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 transition-colors"
        >
          <ChevronLeft color="black" size={24} />
        </button>
      )}

      <div
        className="absolute top-1/2 left-1/8 transform text-5xl text-gray-200 font-bold italic z-1"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        <span>Welcome to My Portfolio</span>
      </div>

      <div
        className="absolute top-1/2 right-1/6 transform text-5xl text-gray-200 font-bold italic z-1"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        <span>Thank you</span>
      </div>

      <div
        className="flex justify-center items-center w-full h-full"
        style={{
          backgroundImage: "url('/bookcover.jpg')",
          backgroundSize: "auto", // Maintain the image's original size
          backgroundPosition: "center",
          backgroundRepeat: "repeat", // Repeat the background
        }}
      >
        {clientWidth && clientHeight && (
          <div>
            {/* @ts-expect-error: TypeScript may throw an error related to the pageFlip ref */}
            <HTMLFlipBook
              ref={bookRef}
              width={clientWidth / 2}
              height={clientHeight}
              mobileScrollSupport={false}
              className="rounded-xl shadow-2xl z-10"
              onFlip={onFlip}
              onInit={onInit}
              showCover={true}
            >
              <Page number={1} title="📖 Cover Page">
                <Cover />
              </Page>
              <Page number={2} title="🏠 Home">
                <PageHome />
              </Page>
              <Page number={3} title="💡 Skills">
                <PageSkills range="first" />
              </Page>
              <Page number={4} title="💡 Skills">
                <PageSkills range="second" />
              </Page>
              <Page number={5} title="🛠️💻 Projects">
                <PageProjects page={1} />
              </Page>
              <Page number={6} title="🛠️💻 Projects">
                <PageProjects page={2} />
              </Page>
              <Page number={7} title="🛠️💻 Projects">
                <PageProjects page={3} />
              </Page>
              <Page number={8} title="🛠️💻 Projects">
                <PageProjects page={4} />
              </Page>
              <Page number={9} title="🛠️💻 Projects">
                <PageProjects page={5} />
              </Page>
              <Page number={13} title="🎓📚 Educations">
                <PageEducation />
              </Page>
              <Page number={14} title="💼🛠️ Experiences">
                <PageExperience />
              </Page>
              <Page number={15} title="🏆🌟 Achievements">
                <PageAchievements page={1} />
              </Page>
              <Page number={16} title="🏆🌟 Achievements">
                <PageAchievements page={2} />
              </Page>
              <Page number={17} title="📞✉️ Contact">
                <PageContact />
              </Page>
            </HTMLFlipBook>
          </div>
        )}
      </div>

      {currentPage < totalPages - 1 && (
        <button
          onClick={nextPage}
          title="Next Page"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 transition-colors"
        >
          <ChevronRight color="black" size={24} />
        </button>
      )}
    </div>
  );
}
