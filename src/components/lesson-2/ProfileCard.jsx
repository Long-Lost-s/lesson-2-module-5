export function ProfileCard() {
  return <div className="container">
    <div className="card">
      <div className="card--header" />
      <img
        className="avatar"
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="avatar"
      />
      <div className="card--body">
        <div>
          <p className="text-header">Ruma Khan</p>
          <p className="text-sub">
            Who the  fuck is this guy?
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
}