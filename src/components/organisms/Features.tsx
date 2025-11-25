
export const Features = () => {
  return (
 <section className="features" id="features">
        <header className="features-header">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </header>

        <div className="features-tabs">
          <button className="tab active" data-tab="bookmarking">
            Simple Bookmarking
          </button>
          <button className="tab" data-tab="searching">Speedy Searching</button>
          <button className="tab" data-tab="sharing">Easy Sharing</button>
        </div>

        <div className="features-content">
          <article className="tab-panel active" id="bookmarking">
            <div className="feature-box">
              <div className="blue-box"></div>
              <img
                src="../assets/images/illustration-features-tab-1.svg"
                alt="Bookmarking"
              />
            </div>
            <div className="text">
              <h3>Bookmark in one click</h3>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="btn btn-blue">More Info</button>
            </div>
          </article>

          <article className="tab-panel" id="searching">
            <div className="feature-box">
              <div className="blue-box"></div>
              <img
                src="../assets/images/illustration-features-tab-2.svg"
                alt="Searching"
              />
            </div>
            <div className="text">
              <h3>Intelligent search</h3>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="btn btn-blue">More Info</button>
            </div>
          </article>

          <article className="tab-panel" id="sharing">
            <div className="feature-box">
              <div className="blue-box"></div>
              <img
                src="../assets/images/illustration-features-tab-3.svg"
                alt="Sharing"
              />
            </div>
            <div className="text">
              <h3>Share your bookmarks</h3>
              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="btn btn-blue">More Info</button>
            </div>
          </article>
        </div>
      </section>
  );
};

