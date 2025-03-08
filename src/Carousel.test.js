import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// smoke
it("should render without breaking", () => {
  render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
});

// snapshot
it("should be the same as previous render", ()  => {
  const {asFragment} = render(<Carousel photos={TEST_IMAGES} title="Test Carousel"  />);
  expect(asFragment()).toMatchSnapshot();
})


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move back in carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle")
  fireEvent.click(leftArrow)

  // move backwards in the carousel
  expect(
    container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();

})

it("hides the left arrow when on the first image", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  
  const leftArrow = container.querySelector(".bi-arrow-left-circle")

  expect(leftArrow).not.toBeInTheDocument();
})

it("hides the right arrow when on the first image", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".bi-arrow-right-circle")

  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)

  expect(rightArrow).not.toBeInTheDocument();
})


 
