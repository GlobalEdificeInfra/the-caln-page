import { useEffect } from "react";

const CONVERSALES_AGENT_ID = "agent_1501kq1t1hxzewvb4j1pcfrf902b";
const CONVERSALES_SCRIPT_SRC =
  "https://unpkg.com/@conversales/convai-widget-embed";
const CONVERSALES_SCRIPT_SELECTOR =
  'script[data-conversales-convai-widget="true"]';

const ConversalesWidget = () => {
  useEffect(() => {
    if (
      document.querySelector<HTMLScriptElement>(CONVERSALES_SCRIPT_SELECTOR)
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = CONVERSALES_SCRIPT_SRC;
    script.async = true;
    script.type = "text/javascript";
    script.dataset.conversalesConvaiWidget = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <conversales-convai agent-id={CONVERSALES_AGENT_ID} leads-capture="true" />
  );
};

export default ConversalesWidget;
