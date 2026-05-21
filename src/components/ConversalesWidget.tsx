import { useEffect } from "react";

const CONVERSALES_AGENT_ID = "agent_1501kq1t1hxzewvb4j1pcfrf902b";
const CONVERSALES_SCRIPTS = [
  {
    src: "https://d1g93122kb0gi0.cloudfront.net/nexus-widget",
    datasetKey: "conversalesWidget",
  },
  {
    src: "https://d1g93122kb0gi0.cloudfront.net/conversales_lead_capture.js",
    datasetKey: "conversalesLeadCapture",
  },
] as const;

const ConversalesWidget = () => {
  useEffect(() => {
    CONVERSALES_SCRIPTS.forEach(({ src, datasetKey }) => {
      const selector = `script[data-${datasetKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}="true"]`;

      if (document.querySelector<HTMLScriptElement>(selector)) {
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.type = "text/javascript";
      script.dataset[datasetKey] = "true";
      document.body.appendChild(script);
    });
  }, []);

  return <conversales-convai agent-id={CONVERSALES_AGENT_ID} />;
};

export default ConversalesWidget;