import axios from "axios";
import { AnnotationProps, RdfsResourceProps } from "nagu-owl-types";
import { TriplesApiOptions } from ".";

export const get = async (params:RdfsResourceProps, options:TriplesApiOptions)
  :Promise<RdfsResourceProps & AnnotationProps> => {
  const url = `${options.host}/rdf/resource/${encodeURIComponent(params.iri.toString())}`;
  // console.log(url);
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}

export const create = async (params:RdfsResourceProps & AnnotationProps, options:TriplesApiOptions) => {
  const { iri, ...data } = params;
  const res = await axios.put(`${options.host}/rdf/resource/${iri.toString()}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data;
}

export const update = async (params:RdfsResourceProps & AnnotationProps, options:TriplesApiOptions) => {
  const { iri, ...data } = params;
  const res = await axios.post(`${options.host}/rdf/resource/${iri.toString()}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data;
}
