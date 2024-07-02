import axios from "axios";
import { AnnotationProps, RdfsResourceProps } from "nagu-owl-types";
import { TriplesApiOptions } from ".";

export type Instance = RdfsResourceProps & AnnotationProps & {
  types: Array<RdfsResourceProps & AnnotationProps>,
} 
export const instancesOf = async (params:RdfsResourceProps, options:TriplesApiOptions)
  :Promise<Instance[]> => {
  const url = `${options.host}/rdf/class/${encodeURIComponent(params.iri.toString())}/instances`;
  console.log(url);
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}
