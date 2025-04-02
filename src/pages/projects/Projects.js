import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  // publicationsHeader,
  // publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <GithubRepoCard
            repo={{
              name: "Live Location Tracking App",
              description: "Enabled real-time location sharing features.",
              createdAt: "2024-01-10",
              // url: "https://github.com/user/location-tracking-app",
              languages: ["Flutter", "Dart"],
            }}
            theme={theme}
          />

          <GithubRepoCard
            repo={{
              name: "Jewellers App",
              description:
                "Managed customer records, financial schemes, and Razorpay integration.",
              createdAt: "2024-02-15",
              // url: "https://github.com/user/jewellers-app",
              languages: ["Flutter", "Dart", "Firebase"],
            }}
            theme={theme}
          />

          <GithubRepoCard
            repo={{
              name: "Bharath Gas Booking App",
              description: "Streamlined gas booking and management processes.",
              createdAt: "2024-03-20",
              // url: "https://github.com/user/gas-booking-app",
              languages: ["Flutter", "Dart", "Node.js"],
            }}
            theme={theme}
          />

          <GithubRepoCard
            repo={{
              name: "Expense Tracker App",
              description: "Helped users track their daily expenses.",
              createdAt: "2024-04-05",
              // url: "https://github.com/user/expense-tracker",
              languages: ["Flutter", "Dart", "SQLite"],
            }}
            theme={theme}
          />

          <GithubRepoCard
            repo={{
              name: "Sales Management App",
              description:
                "Improved efficiency in sales tracking and operations.",
              createdAt: "2024-05-30",
              // url: "https://github.com/user/sales-management",
              languages: ["Flutter", "Dart", "REST API"],
            }}
            theme={theme}
          />

          <GithubRepoCard
            repo={{
              name: "Fitness tracker app",
              description:
                "Developed athletic tracking app to improve practice schedules.",
              createdAt: "2024-06-15",
              // url: "https://github.com/user/bmi-calculator",
              languages: ["Flutter", "Dart", "Firebase"],
            }}
            theme={theme}
          />
        </div>

        {/* <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        /> */}

        {/* Publications  */}
        {/* {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null} */}

        {/* <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
