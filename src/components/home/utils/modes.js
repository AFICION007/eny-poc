export const getAgentFromSelectedModes = (selectedModes) => {
  const agentModesMap = {
    knowledge_base: "internal",
    web_search: "web",
    deep_research_knowledge_base: "deep-internal",
    deep_research_web_search: "deep-web",
    // TODO: ??
    knowledge_base_web_search: "",
    //
    deep_research: "deep-research",
    deep_research_knowledge_base_web_search: "deep-research",
  };

  const mode = selectedModes.sort().join("_");
  return agentModesMap[mode];
};

export const getSourcesFromAgent = (mode, data) => {
  if (mode === "internal" || mode === "web") {
    return data.sources.map((source) => ({ sourceType: mode, ...source }));
  } else if (mode === "deep-research") {
    return [
      ...data.internal_sources.flat().map((source) => ({
        sourceType: "internal",
        ...source,
      })),

      ...data.web_sources.flat().map((source) => ({
        sourceType: "web",
        ...source,
      })),
    ];
  } else if (mode === "deep-internal") {
    return data.sources.flat().map((source) => ({
      sourceType: "internal",
      ...source,
    }));
  } else if (mode === "deep-web") {
    return data.sources.flat().map((source) => ({
      sourceType: "web",
      ...source,
      title: source.title || source.description,
    }));
  }
};
