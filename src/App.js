import React from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import TemplateSelector from "./components/TemplateSelector";
 
const App = () => (
  <>
    <Header />
    <div style={{ display: "flex", gap: "1rem" }}>
      <FormSection />
      <ResumePreview />
    </div>
    <TemplateSelector />
  </>
);
 
export default App;

