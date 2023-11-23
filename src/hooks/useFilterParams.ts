import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterParam } from "types/api";

export const useFilterParams = <ParamType extends FilterParam>() => {
  const [params, setParams] = useSearchParams();

  const searchParamsString = Array.from(params.entries())
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const appendParam = useCallback(
    (param: ParamType) => {
      params.delete(param.label);
      params.append(param.label, `${param.value}`);
      setParams(params);
    },
    [params, setParams],
  );

  const removeParam = useCallback(
    (param: Partial<ParamType>) => {
      if (param.label) {
        params.delete(param.label);
        setParams(params);
      }
    },
    [params, setParams],
  );

  return { appendParam, removeParam, searchParamsString };
};
