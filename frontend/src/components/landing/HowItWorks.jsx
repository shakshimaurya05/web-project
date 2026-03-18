import { motion } from "framer-motion";
import StepCard from "./StepCard";
import steps from "./stepsData.js";
import "./HowItWorks.css";

const HowItWorks =() =>{
  return(
   <div className="how-it-works">
    <h2>How It Works</h2>

<motion.div 
  className="steps"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }}
>
  {steps.map((step, index) => (
    <StepCard
      key={index}
      stepNumber ={index+1}
      icon={step.icon}  
      title={step.title}
      description={step.description}
    />
  ))}
</motion.div>

</div>
  );
};

export default HowItWorks;