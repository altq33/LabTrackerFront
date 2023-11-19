import { $api } from "http/index";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Subject } from "types/api";
import * as S from "./styles";

export const SubjectPage = () => {
  const params = useParams();
  const [subject, setSubject] = useState<null | Subject>(null);
  // Смысла повторять запрос нет так как текущий объект уже есть в сторе но тем не менее
  // Это будет правильней так как потом страница может стать не приватной и стора для конкретного пользователя не будет
  useLayoutEffect(() => {
    $api
      .get<Subject>(`/subjects/${params.id}`)
      .then((res) => setSubject(res.data));
  }, [params.id]);

  return <S.Container>{params.id}</S.Container>;
};
