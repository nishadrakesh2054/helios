import { useEffect } from "react";

export default function TidioChatbot() {
  useEffect(() => {
    // Get Tidio Public Key from environment variable or use default
    // You can set REACT_APP_TIDIO_KEY in your .env file
    const tidioKey = process.env.REACT_APP_TIDIO_KEY || "YOUR_TIDIO_PUBLIC_KEY";

    // Don't load if key is not set
    if (tidioKey === "YOUR_TIDIO_PUBLIC_KEY") {
      console.warn(
        "Tidio Chatbot: Please set your Tidio Public Key in .env file as REACT_APP_TIDIO_KEY"
      );
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="tidio.co"]');
    if (existingScript) {
      return; // Script already loaded
    }

    // Tidio Chatbot Script
    const tidioScript = document.createElement("script");
    tidioScript.src = `//code.tidio.co/${tidioKey}.js`;
    tidioScript.async = true;
    tidioScript.type = "text/javascript";

    // Add script to document
    document.body.appendChild(tidioScript);

    // Cleanup function to remove script on unmount
    return () => {
      const scriptToRemove = document.querySelector('script[src*="tidio.co"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
