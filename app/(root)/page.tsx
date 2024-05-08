import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Shivam" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {/* Welcome, Shivam */}
          <HeaderBox
            type="greeing"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and "
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
