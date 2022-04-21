import LayoutContent from "../components/layout/LayoutContent";
import Head from "next/head";

function HomePage() {
    return (
        <div>
            <Head>
                <title>Task Manager App</title>
            </Head>
            <LayoutContent />
        </div>
    );
}

export default HomePage;