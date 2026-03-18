import { motion } from "framer-motion";

const StepCard = ({icon: Icon, title, description, stepNumber})=>{
    return(
        <motion.div 
            className="step-card"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Icon className="step-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="step-number">
                {stepNumber}
            </div>
        </motion.div>
    );
};

export default StepCard;