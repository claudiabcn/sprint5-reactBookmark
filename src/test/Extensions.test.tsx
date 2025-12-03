import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Extensions } from '../components/organisms/Extensions';  

vi.stubGlobal('alert', vi.fn());

const mockBrowsers = [
  { name: 'Chrome', version: '62', image: 'path/to/chrome.svg' },
  { name: 'Firefox', version: '55', image: 'path/to/firefox.svg' },
  { name: 'Opera', version: '46', image: 'path/to/opera.svg' },
];

vi.mock('../../config/appData', () => ({
  browsers: mockBrowsers,
}));

describe("Extensions Component (Browser Cards)", () => {
  
  it("should render the main section header", () => {
    render(<Extensions />);
    
    const titleElement = screen.getByRole('heading', { level: 2, name: /Download the extension/i });
    expect(titleElement).toBeInTheDocument();
    expect(screen.getByText(/We've got more browsers in the pipeline/i)).toBeInTheDocument();
  });

  
  it("should render the correct number of extension cards", () => {
    render(<Extensions />);
    const browserHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(browserHeadings).toHaveLength(mockBrowsers.length);
  });
  });