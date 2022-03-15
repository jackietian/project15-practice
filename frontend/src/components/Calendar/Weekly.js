const Weekly = () => {
  const getTimeline = () => {
    let startTime = new Date(2022, 3, 15).getTime();

    let timeline = [];

    for (let i = 0; i < 96; i++) {
      timeline.push(startTime);
      startTime = startTime + 15 * 60 * 1000;
    }
    return timeline;
  };

  const getDaySlots = () => {
    return new Array(7).fill(new Array(24 * 4).fill(null));
  };

  return (
    <>
      <h1>weekly calendar</h1>
      <section className="row">
        <section>
          <ul className="list--time-lines">
            {getTimeline().map((item, index) => (
              <li key={item}>
                {index % 4 === 0
                  ? new Date(item).toLocaleTimeString("en-au", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </li>
            ))}
          </ul>
        </section>
        <section style={{ flex: 1 }}>
          <ul className="list--weekly-calendar">
            {getDaySlots().map((slot, index) => (
              <li key={index}>
                <ul className="list--time-slots">
                  {slot.map((_, idx) => (
                    <li key={idx}></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Weekly;
