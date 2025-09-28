import "../styles/joinWaitlist.css";
function JoinWaitlist({
  email,
  setEmail,
  loadingSubmission,
  submitDisabled,
  submitted,
  submitEmail,
}) {
  return (
    <section id="joinwaitlist" className="joinwaitlist-page">
      <div className="joinwaitlist-text-wrapper">
        <h1 className="joinwaitlist-header">
          Making new friends in college can be hard, but it doesn't have to be.
        </h1>
        <h3 className="joinwaitlist-sub-header">
          Nito is launching soon on campuses nationwide. Join the waitlist
          <br></br> and be the first to know when we go live.
        </h3>
      </div>

      <div className="joinwaitlist-input-wrapper">
        <input
          disabled={submitted}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="joinwaitlist-input"
          placeholder={submitted?"Thank you for joining the waitlist!":"Your email address"}
        ></input>
        <button
          disabled={submitDisabled}
          onClick={submitEmail}
          className="joinwaitlist-button"
          style={{backgroundColor:`var(--color-accent${submitDisabled?"-50":"-70"})`}}
        >
          {submitted ? (
            "You're in!"
          ) : loadingSubmission ? (
            <div className="spinner"></div>
          ) : (
            "Join the waitlist"
          )}
        </button>
      </div>
    </section>
  );
}
export default JoinWaitlist;
