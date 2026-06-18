import React from "react";
import { Megaphone } from "lucide-react";
import MetricCard from "./MetricCard";

const ActiveCampaignsCard = ({ className = "" }) => {
  return (
    <MetricCard
      title="Active Campaigns"
      value="148"
      growth="12.4%"
      icon={<Megaphone size={26} />}
      className={className}
    />
  );
};

export default ActiveCampaignsCard;
