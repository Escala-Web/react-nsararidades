export type Month =
  | 'jan' | 'feb' | 'mar' | 'apr'
  | 'may' | 'jun' | 'jul' | 'aug'
  | 'sep' | 'oct' | 'nov' | 'dec';

export interface MonthlyData {
  total: string;
}

export type YearlyMonthlyData = {
  [month in Month]: MonthlyData;
};

export interface Content {
  total: number;
  monthly: {
    [year: string]: YearlyMonthlyData;
  };
  yearly: {
    [year: string]: number;
  };
}

export interface IPayments {
  success: boolean;
  message: string;
  content: Content;
}
