import axios from "axios";
import { TriplesApiOptions } from ".";
import { ITriple } from "nagu-triples-types";

export type GetById = {
  id: number,
}
export const getById = async (params:GetById, options:TriplesApiOptions): Promise<ITriple> => {
  const url = `${options.host}/triple/${params.id}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}

export const getOrCreate = async (params:{ subject:string, predicate:string, object:string}, options: TriplesApiOptions) => {
  const url = `${options.host}/triple/`;
  const res = await axios.put(url, params, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}

export const listByS = async (params:{ iri:string }, options: TriplesApiOptions): Promise<ITriple[]> => {
  const url = `${options.host}/subject/${encodeURIComponent(params.iri)}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}

export const listBySP = async (params:{ subject:string, predicate:string }, options: TriplesApiOptions)
  :Promise<ITriple[]> => {
  const url = `${options.host}/subject/${encodeURIComponent(params.subject)}/predicate/${encodeURIComponent(params.predicate)}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}

export const listByP = async (params:{ iri:string }, options: TriplesApiOptions): Promise<ITriple[]> => {
  const url = `${options.host}/predicate/${encodeURIComponent(params.iri)}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}

export const listByPO = async (params:{ predicate:string, object:string }, options: TriplesApiOptions)
  :Promise<ITriple[]> => {
  const url = `${options.host}/predicate/${encodeURIComponent(params.predicate)}/object/${encodeURIComponent(params.object)}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    }
  });
  return res.data.data;
}