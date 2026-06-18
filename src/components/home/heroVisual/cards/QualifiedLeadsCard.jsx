import React from "react";
import { Users } from "lucide-react";
import MetricCard from "./MetricCard";

const QualifiedLeadsCard = ({ className = "" }) => {
  return (
    <MetricCard
      title="Qualified Leads"
      value="12.4K"
      growth="28.6%"
      icon={<Users size={26} />}
      className={className}
    />
  );
};

export default QualifiedLeadsCard;
