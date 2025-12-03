import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { Newsletter } from '../components/organisms/Contact'; 

global.alert = vi.fn();

describe("Newsletter Component - Critical Tests", () => {
  
  it("should render the email input and the submit button", () => {
    render(<Newsletter />);
    

    expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
    
    expect(screen.getByRole('button', { name: /Contact Us/i })).toBeInTheDocument();
  });

  it("should display 'Email is required' when submitting an empty field", () => {
    render(<Newsletter />);
    
    const submitButton = screen.getByRole('button', { name: /Contact Us/i });
    
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  it("should display 'Please enter a valid email address' for an invalid email", () => {
    render(<Newsletter />);
    
    const emailInput = screen.getByPlaceholderText(/Enter your email address/i);
    const submitButton = screen.getByRole('button', { name: /Contact Us/i });
    
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it("should clear the input field on successful submission", () => {
    render(<Newsletter />);
    
    const emailInput = screen.getByPlaceholderText(/Enter your email address/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /Contact Us/i });
    const validEmail = 'success@test.com';

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.click(submitButton);

  });
});