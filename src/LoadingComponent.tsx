import React, { useEffect } from "react";
import "./LoadingComponent.css";

const LoadingComponent: React.FC = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loadingPage = document.getElementById("loading-page");
      const loader = document.getElementById("loader");
      const lastRay = document.getElementById("lastray");
      const body = document.body;

      if (loadingPage) loadingPage.classList.add("loaded");
      if (loader) loader.classList.add("opzero");
      if (lastRay) lastRay.classList.add("finalray");
      body.classList.add("whitebk");
    }, 6500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet consectetur ligula, quis volutpat nisi. Sed interdum dui non
          semper lacinia. Curabitur gravida elit libero, non molestie quam
          tristique id. In luctus venenatis sapien eget ultricies. Nullam varius
          sapien non lectus dapibus, eget malesuada mauris accumsan. Etiam neque
          diam, viverra nec tellus eu, varius gravida nunc. Cras eget euismod
          libero. Nam quis lobortis nequ. Nullam a lobortis justo. Duis mattis
          rhoncus dolor, et finibus lorem dignissim a.
        </p>

        <p>
          Pellentesque porttitor in sapien eget tempor. Phasellus ultrices quam
          sed enim lacinia gravida. In dignissim vel libero ut tincidunt.
          Suspendisse sit amet tellus id orci tempor euismod et eget mi. Nam non
          mauris nec nulla euismod facilisis. Duis sit amet sagittis velit. Cras
          felis diam, ornare in vehicula id, scelerisque vel erat. Ut eleifend
          pulvinar risus, sit amet pellentesque velit scelerisque et. Morbi eu
          nunc sit amet diam tempus finibus. Morbi fringilla ligula quis ante
          dignissim, eu pretium nibh efficitur.
        </p>
      </div>
      <div id="loading-page">
        <div id="loader">
          <div className="particles element">
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index} className={`spark${index + 1} spark element`}>
                <div className={`particle${index + 1} particle element`}></div>
              </div>
            ))}
          </div>
          <div className="ray element"></div>
          <div className="sphere element"></div>
        </div>
      </div>
      <div id="lastray" className="element"></div>
    </div>
  );
};

export default LoadingComponent;
