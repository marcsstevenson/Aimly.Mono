export interface BaseApiCallingState<ResultType> {
  // constructor() {
  //   this.showResult = false;
  //   this.apiMessage = '';
  //   // this.results = null;
  // }
  showResult: boolean;
  apiMessage: string;
  error: any;
  results: ResultType;
}