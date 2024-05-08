import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Shivam" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {/* Welcome, Shivam */}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and "
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1655.42}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
