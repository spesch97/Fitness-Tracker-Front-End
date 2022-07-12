export default function Home ({ token }) {
    return (
      <>
      {token ? (<h3>Welcome back! Navigate to your profile page to see your routines, edit them, or add a new activity. </h3>) : (<h3> Welcome to Fitness Tracker. A place to get started on your workout goals. Once you've registered you can create routines and have them saved to your profile.</h3>)}
      </>
    );
  }