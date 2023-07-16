import PageIntroSection from "@/components/Sections/PageIntroSection";
import RecentPostsSection from "@/components/Sections/RecentPostsSection";

const Root = () => {
    return(
        <>
            <PageIntroSection text="This is my blog!" />
            <RecentPostsSection />
        </>
    )
}

export default Root;