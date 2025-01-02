import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-getting-started-34791-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST', 
        body: JSON.stringify(meetupData),
        headers: {
            'Content-Type': 'application/json'
        }
      }
    );
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetupPage;
