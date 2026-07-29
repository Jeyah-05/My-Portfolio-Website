import HydroHub from "../assets/hydrohub.png";
import Aeilu from "../assets/aeilu.png";
import CordiMap from "../assets/cordimap.png";
import Unstuffed from "../assets/unstuffed.png";
import PMA from "../assets/pma.png";
import PharMart from "../assets/pharmart.png";

const projects = [
    {
        id: 1,
        title: "HydroHub",
        image: HydroHub,
        description:
            "Time Series Forecasting Model for Interactive Water Balance Mapping in CAR",
        summary:
            "HydroHub is a web-based GIS application that visualizes water balance conditions across the Cordillera Administrative Region (CAR). It integrates a time series forecasting model to generate future water balance maps, helping support water resource planning and decision-making through interactive data visualization.",
        tech: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Leaflet", "Python"],
        github: "https://hydrohub.cordimap.site/",
        demo: "",
    },
    {
        id: 2,
        title: "Aeiluminate",
        image: Aeilu,
        description:
            "A social media web application for Saint Louis University students and alumni",
        summary:
            "Aeiluminate is a social media web application designed for Saint Louis University students and alumni, enabling users to connect, share posts, engage in discussions, and build a stronger university community through an interactive online platform.",
        tech: ["React", "JavaScript", "MySQL", "Vercel", "Socket.IO"],
        github: "https://aeiluminate.vercel.app/login",
        demo: "",
    },
    {
        id: 3,
        title: "CordiMap",
        image: CordiMap,
        description:
            "Interactive GIS application for water balance and land forecasting and visualization",
        summary:
            "CordiMap is a web-based GIS platform that integrates HydroHub and TerraMap into a single system, providing interactive visualization of water balance forecasts and land suitability data to support environmental planning and decision-making in the Cordillera Administrative Region.",
        tech: ["React", "DaisyUI", "Tailwind CSS"],
        github: "https://github.com/yukiroow/cordimap-landing-site",
        demo: "",
    },
    {
        id: 4,
        title: "Unstuffed",
        image: Unstuffed,
        description:
            "Give your unused items a second life",
        summary:
            "A community marketplace web application for buying, selling, and exchanging secondhand items, promoting sustainability by giving unused belongings a second life.",
        tech: ["Figma"],
        github: "https://www.figma.com/design/VFdPhywkskX5G7oR94vnIw/Unstuffed?node-id=245-2&t=G5AfmoebaMLKMYUz-1",
        demo: "",
    },
    {
        id: 5,
        title: "Admission",
        image: PMA,
        description:
            "A web-based admission management system for the Philippine Military Academy",
        summary:
            "Developed and enhanced a responsive web-based admission system for the Philippine Military Academy, improving applicant registration, application tracking, permit generation, and administrative management through an efficient and user-friendly interface.",
        tech: ["JavaScript", "React", "Node.js", "MySQL", "Tailwind CSS", "Vite", "Ubuntu"],
        github: "https://github.com/Jeyah-05/PMA-Admission",
        demo: "",
    },
    {
        id: 6,
        title: "PharMart",
        image: PharMart,
        description:
            "A pharmacy app prototype for convenient medicine shopping",
        summary:
            "PharMart is a pharmacy mobile app prototype designed to simplify medicine browsing, ordering, and prescription management through a user-friendly interface.",
        tech: ["Figma"],
        github: "https://www.figma.com/design/xaQJh13xHyxnwyn8KiVhvC/PharMart?node-id=0-1&t=Xu9dxOusOD2h5TQG-1",
        demo: "",
    },
];

export default projects;