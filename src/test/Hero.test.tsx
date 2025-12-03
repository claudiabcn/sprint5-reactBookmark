import { describe, it, expect,vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { Hero } from '../components/organisms/Hero'; 
global.alert = vi.fn();
describe("Hero Component", () => {
  
  it("should render the main title", () => {
    render(<Hero />);
      });

  it("should render the descriptive paragraph", () => {
    render(<Hero />);
    
    const descriptionText = /A clean and simple interface to organize your favourite websites/i;
    
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });

});