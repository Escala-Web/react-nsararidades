import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Importação direta dos templates
import { Template01 } from "../templates/Template01";
import { Template02 } from "../templates/Template02";
import { HeaderEdit } from "../../components/HeaderEdit";
import { useStore } from "../../hooks/Store/useStore";
import { Template03 } from "../templates/Template03";

enum TemplateNames {
  shopster = "shopster",
  flashtrend = "flashtrend",
  templa = "templa",
}

export const Editor = () => {
  const [search] = useSearchParams();
  const layout = search.get("layout") as TemplateNames | null;
  const isEdit = search.get("editor");

  const { findOneStore } = useStore();

  const templates = {
    [TemplateNames.shopster]: Template01,
    [TemplateNames.flashtrend]: Template02,
    [TemplateNames.templa]: Template03,
  };

  const isTemplateName = (value: string): value is TemplateNames => {
    return Object.values(TemplateNames).includes(value as TemplateNames);
  };

  const getInitialTemplate = (): TemplateNames => {
    if (
      layout &&
      isTemplateName(layout)
    ) {
      return layout as TemplateNames;
    }
    const storeLayout = findOneStore?.data?.content?.LAYOUT;
    if (storeLayout && isTemplateName(storeLayout)) {
      return storeLayout as TemplateNames;
    }
    return TemplateNames.templa;
  };

  const [selectTemplate, setSelectTemplate] =
    useState<TemplateNames>(getInitialTemplate());

  useEffect(() => {
    if (
      layout &&
      Object.values(TemplateNames).includes(layout as TemplateNames)
    ) {
      setSelectTemplate(layout as TemplateNames);
    }
  }, [layout]);

  const SelectedTemplate = templates[selectTemplate];

  return (
    <div>
      {isEdit === "1" ? (
        <>
          <HeaderEdit>
            <div style={{ paddingLeft: "240px", paddingTop: "80px" }}>
              <SelectedTemplate />
            </div>
          </HeaderEdit>
        </>
      ) : (
        <SelectedTemplate />
      )}
    </div>
  );
};
