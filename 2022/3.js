let input = [
    "MVWpzTTrTFNNLtssjV",
    "hRJncnJCnhPCnBSbCQRhhQRPFHmsbHLzbLNHsjNNFmGGGsGF",
    "lSBQJBBBBcnccnQvBnPQznfrgwlrTZfDwTfWqrrpgMpw",
    "sRPgrzSgrSbfTrgspBPsDWWTmdnvdZWZwTmwvdmd",
    "tVGpCGqCGjlHcNGVNHZDmnZMWdWMWCdZDvnZ",
    "HqpQptLlclLGtlpcjHNhQqfRhrSBrrbfbrSRrsPfBSgg",
    "JpjLbQbFPBjDBBJLWltglfBfhhlcctht",
    "vNFmsdFsnmzGtWvgzhzc",
    "rqwRCCqmCTqHCnqRNTNFsJVMQSjLRbbVVbjQVLbLSV",
    "mLNNCNDwBwDnmCwnJwLRvdlqZclRccsgvcZndc",
    "QWMtVWbpVlgHHcgMHs",
    "VsTVWhThsVQWzjtQPpVWjWbpwJNCJDCzSNNCCCSfmfBCSGLL",
    "NbSfHnwDvwwfHwwQsHbWPgrsZsZjRPLRgLWhWP",
    "lmMlTGFzVmzqjGLLZWWGhrCh",
    "qFclMprqmrvbcnwDQtNQ",
    "tWQZFvvtWQWbqQQggZZLvpLrpzDrmGDmmDHPzPzHrfnHTG",
    "NMlhlTMccTCVBlRNHzJnzDDmnJmnGGBf",
    "NMMSSSSSlNVMdjdNSNNhFwTbvbLqjbtLwWQwZqgg",
    "jPwcJwRmmhJpbhNJVgDbrHzzzQzzBQHg",
    "tdZqlCnnnlvZCqlnlCSqZdFCHGDBgzsDzssBtHGLQtrHsssL",
    "TZZFSdrdlZMFZRMwMPmNcwNmwm",
    "nsdhzmDBGQWQPvJPjbbW",
    "gCgBqCNpMHTwgwqMPRJJTtWjbFRJFJvP",
    "ZlCwBrwgmzhGzDrd",
    "sTBHfcnBTnqHRvqPgFFbLtrQTPLjjm",
    "GWzpwSJSpbwbNNGJPQrrtrrrrgzLtjzm",
    "NNSlCCdplWwplCwSndnssdZfqVbHvfqc",
    "rrfHgqnlllRrDgrCbQfszMPtmzPQzFsFMQ",
    "JJLGVGjcwVcPQNNNtRPmLM",
    "WThVJJWJBdGwBpBTqDrSRCCggShqbSCb",
    "TbCqzqzmbCffzDbHRddLbdRFRS",
    "ZmvZJPjPwwWNZJGtWSDRRDFWSLhhhMVVWL",
    "ZwplGwmptNjZnjvnGGPjJlZppTrTsCczfggBgfgfggCsBrqr",
    "gMBBbfBbBMfnMsvRvWJhDsQW",
    "ZZqHLzczjjsLzlpjqTprNJvhQpRvtRJJQrtQtJ",
    "llZlzZZzPZZqsTZscHczfnSwSPSwwgSBwwSnPwnf",
    "chMtcPPgQtthqgvczhMTcCSBLBlGpsFnBnnsGvLplSFG",
    "bhRmJWDRmHSmFGBnGBps",
    "jdDZWbrDdDbbdbDrRRWwRjZRVqztCzqtcThcTQtgqVMMVzjq",
    "flNmNHgcZwTzRLzMLRPlzz",
    "nntqBJtFbbCbBVCnBtFjJjhVhLzLvRLvgRRvPvpMpvpp",
    "CgJWjJQDjgBtnGNGfcssNfcwNW",
    "MrMpMrGBznjPMGCmCrrjdwndfJLQNfdLQNdNggdL",
    "sJVcZqvhZtVqhDFFsDJslcdwgwvwQwwQNbbTbwfLLTgL",
    "RDDRcsSsstJstVDDqctszzmRmGjpjBRHPmmGHGrj",
    "tdplZtlrBGwTlLQQ",
    "sfsPPvNhWLQBhGQG",
    "zPVfzVbbMcscvVfzzNgcJHnJZgtrrndJqjJqndrL",
    "nglLjRCCHLLCnNCLHQnFNQmmVMbVmwMwlMwMMMWwBTsT",
    "cqtfcqZpzhSvvBfWwbvrbT",
    "PPqpDSqcSJPdPhtPtqZcpPtGjFRFFFNLJFGRgjFbGRNbHn",
    "gjtRSLMqLdSgLMCltTSDQcQQqhDcfcfrWDhWrr",
    "GwFZCwNzFJsPmFFmZmPPNhvDDfDWWmpvQWWfVDQppW",
    "swNGZbPBGwnCgBBlBljl",
    "BsrDsnQGwFFQQtfNTBNSffBgBt",
    "VJlhWVLlRppLQZTCbtZTttgJ",
    "ppLqqRhQdRPhqPVhdPjhljqHFnGnzFrjFFDznHFHrmwwnH",
    "CJMmmJLmlshCCdmzjHjPWztgdnjttt",
    "GwZvGwrgTcFpzHWjnT",
    "GbqrvrRwbrbGbwwZBbgfhmJMmsDJhNRfLChhCh",
    "CfgfjCLCgfgFgBhBsccswQwtsQHvBBtc",
    "SbSMGbnmDMGJWmRmDmvzwtcscWtQzsrPsvHc",
    "DbJdNpJSnMSJmpSSNVqgqgTTFVQTFqdZLq",
    "MBMCmlllPSSlmmPPjCMpPgggJcnZgntJsDvHsDZt",
    "hrNzhrRNbrhbGRbfpVLRGNqqngvnttngJctgDZJGcZvHvZnc",
    "LTTzVqppSmwdTmQW",
    "mmlBQmLbsbmRnFnwlqqprF",
    "dZScZSZSdHcNMDcJwLqRfppzpzfTpHfF",
    "JLWJLJJJdMmGtgCWjQjt",
    "PPMzpVDblwGVMMzDLLjrcrjdzjdTzLjd",
    "RRcCJRcNQRBqtCFBRJJsZWBWrjLWLHZZWndBLWjh",
    "qQQtttNqsqqtJRgqQfcpcgDcbggplGbfMp",
    "QmmSTQPmLSmjpczMJtwPzg",
    "BHHHdwdvDpllvctjZv",
    "HdrDHNfrrBDGGBhBNfHNsLFqmbRQSwqmGTLnTbSF",
    "gcMmgRQPqqPPsgjFSvctCHvHllSSHcvd",
    "JTWfZwhTwzbWwTFTrZnTrDDlDSVtVHLVShtvSHvlHL",
    "bWbWBfzTfwrWJNbTrnzfTwJFpmMQgqsFRsQGqRMggPmPBG",
    "GqCWpGGLpmpWjbSDGjGGmwCzZlvMBTrCvsrlwwswCl",
    "FPFHFVdJgQHJZnslrgvsTrwMlNgw",
    "hQVchcdcZZpZqcDG",
    "JbBRgBsRffgPPFQttQvQQMvG",
    "dmNZgmZVtGTNtNGC",
    "ZqqndLZnccqRbsrgpggsBc",
    "DDvMVmTjwFWPBBTzBF",
    "cqnggcbNNCqbQQqbZbpfQpqgRWlFhLRBhRzRPLFJhlJBfPLh",
    "dpscpcncbbqcpMVSvSrPDMsrjr",
    "hGCGZmVRRcMVsGMtmZWssmFLzbFblnnzfmqbfnzNNb",
    "wjrSPBJdSjjDrggpSJpdrSnlFNlzLTnqNLqqpbqqfMln",
    "dMwPBHPPJHDdvrBBhshWCGcsQRcHRZGV",
    "vdHwhqdtLdVnHBZbFBFzbBPS",
    "TmNCLNDpWfCNmpCgTWNTDMMZlzSggBMzlZlMBlBbZZ",
    "NQfWcscDNQrhqvGLrdhVjh",
    "lZLqzzqvgrCRcQcCLD",
    "HSVVwNTJzwVNTDQrRrrdrBwdhd",
    "TpNTzsfSTVsSpHVppzFpgvvlqZWZPMvMjPPGGsgP",
    "BCMLshLdLDDCgwFRwHHqqRqRWd",
    "QnSqQlGSfpQzTQJNTPNwNPFRFcccHc",
    "mfJJmztnQpGpvnSzGrsqgrhrBBhqjBrthL",
    "BSlmzmlvdNnlQlQQJnJHRVFVFVVqMtqRMfSfCw",
    "WBPsDPBBjfssFHMRRq",
    "DLWpGhbPjbhZrhZDnBQgdNZmQNgmvdzg",
    "WWvgBFgHWChBzgBFbjbtPtnPrsHlsRMrwRrMRR",
    "SGfNpfdGfVpVSGGppSDdwRwclMlfPMwccsntPqPw",
    "TVdpQDSpQZJpVpDQQFBbthvmWzmgvhbjzJ",
    "VVCCbzqdbzhFHvbdhZFPmhCPSNRNGSrPJfTNRSGJfGwPST",
    "LngtBnlcnDvLcTTRfTTwRtGNTG",
    "DpnBjMpLlLDQWDgvpLvbqzmbjzVjVHqbFFqbFq",
    "SbzMbNQQSDdmvqqzdSlWFpwZnvpFWWllpFww",
    "CjLPTPjjLCPtBCLJjBLPLBTFsFFgfwwpZgplpgFnWWRl",
    "nPncrBHGnmrbdmdmNN",
    "FnlblGlTTbNVLVtRvQQvgqRQBCvgNr",
    "DPMDMpMHmnzjPqDhQWvvQvhghq",
    "zMMcddznsjFTldVGlFGT",
    "cLSNGLhmRRVmlVCq",
    "HvzbQBzBMQMpQDpCSlSVZRSCqV",
    "QwWznWnTbQSMMJQHnvwbWjrhNhLFgsGNNrFLNnFNhd",
    "dBrWNQWWcTNqqnNN",
    "bPlmgRgRghlCVlbhwZccCZjZqvmqvmTTvGqmJTvqnGTGvLLJ",
    "DCDZhjllcpDMrSQS",
    "ddtNNTFTwRzGRGCwqnBMjlqMHMfqnB",
    "hDpPsQLLSprhnHVhqhVfHM",
    "QWLWDQZpgpWbQgfspGGRdcGcCcCcztTGZC",
    "GGHFdGwFlswcFtnvTfjMjBFfNBjNBZ",
    "JWmSJLPSRprWWPWVMMVQpZfBvvfQtj",
    "RzPSPDbDDhbhPDLRhCgGHHccsqGCqqtHzG",
    "dbSdptWddDMNtdFvttFclqMTZJlJTlMZqJTJTqjC",
    "BzfwRzrwPzfzLNGmZZCZBTGBqqlH",
    "hVNVQPNQQQVLPwhRrQwgWWvFdDsFWSbdWgdFSFDb",
    "hhSnmhtZSFSqZBJSSqqmJJRHPPLgHtPcGGGcWGtvvHwgvG",
    "fCMpfTQjTrzrzCQMsQdHGHvPGPwLppPRvWPLLc",
    "MdTzCsCMzNzDCTjlmNhRmRnZBllRVh",
    "RrFglccgBVVvFNvCvWlgmDbbDfQDtCdjjDbDwmZD",
    "STnMqSLHJhHHnqLqtnBndbBdfQQZDtZD",
    "GHJPTBsTSsMMSpSBHJFNlWzcvFlzsVzvzgsv",
    "lplNdrVrVrWMMVcJfcDDzbqCCpDL",
    "SSSgvBRSjggPgzvTTRHTvFnfJLbcLsCDLnCLDCcJBsJq",
    "GmHjjRwvHSjHTRjrlZrNMzVMhVrmVW",
    "gdtFtgStSbHCbHMPZrFLPLrVlrVZrP",
    "hQnjMGfDqTvzvpBjVVjPRLRRjJ",
    "QmsQmhvvMtssHtWw",
    "RNjTGSCLJCGdRqMRFvMrfzMvzz",
    "ZpcWcVDpWBmWQMZZpZDpwBcznrshtntvfvhfFtzmvnzvhf",
    "WHHHcVWgQVCbCllbgMLN",
    "ZjjdJHSdSzvcZFMhhhDqDHtthw",
    "rNTlNqVWTmRPlshsDPDlph",
    "WbTNGNmQBRQbRNQgNGmCLdvvjzcCSBqLcLnScL",
    "bZwpSpBvSHCBqNzpdFffqQft",
    "nWRnGRnVnljmlDnzdPfQfdcQPWWfNq",
    "dmRDGMMlDmnVjgMlhBSwCbCgwHbBHhvv",
    "NwqLgLBLgnwNNBGpgsQsddhhpQQg",
    "JcztcZnzVtZvnVcJMTvTJtWtppsQHGdQhhHHQsPhWdPS",
    "fJTJnMmvZvMvRDqFblNBNNjlBf",
    "drZVzZzzNWWzwwTWTZrjWcLCqnRqNnLNLqCqnsPPRL",
    "JhlBgvHBBLnwMBqDwC",
    "GmGFSHmhJSGJwgFJmwJhJhgQVWVdbSWZQzZTrWtZzjzjTz",
    "wPGRPpnzgwwGgLddFBFrnrnJdc",
    "jCsVclQWmCTrJJddrdFs",
    "lWjlCqfmlWccpGPPSgcf",
    "hCThCzTdPcPhzqTzMfVfHrhMMmhVHgVM",
    "lJSJNqwJsZBSsSBFsMprDmFmFDfDDHgHDf",
    "JNGQsSSNGsbZZZSBwZLPtdLjttnqPCbtPbjC",
    "vnlWNpbrNrpShhQDLRLB",
    "MzCjPgffVTVgCJSRQhBdRdJS",
    "VPHcfcBfTzVMTttMzMfgzMfHvrllWvlnvNvlmGwWNwwNmw",
    "BwwsqPJqwBssLlFqLRCDzWwzDGRGGWfSRG",
    "vTtmmthvpphpnNgNvvpvRrDCddDQrCQCzCDrCfnf",
    "pppccNpTVVlqssHHVzBH",
    "HWHphZWVWvMZNvpMtfJZgssffsjJgBlslJ",
    "RLmrFFnGFrFFrrFCRwCrLNPwqfjSJjqJSJBbsqjbbsblfq",
    "LnFLPPGLrGNRQPmndLzPmPmpcDcMHhcMhVHvczcpHHchcV",
    "zwqqvNDVggwqVfNQRlszFBsCCJFtFlFPsz",
    "MSrrGTZPGSSMSjPbTmtlHBBFrFHFsHlsJsct",
    "MnmMPMSZZGSZWmSjnWgfqdgVQDvnqvRDggDV",
    "SQCSBShsQnSsSJswsNpVppPPMVpGpnDVgg",
    "WWjHvmtWZrwvtzzjTTRPrRRrMVNVVGgVGpGR",
    "lTvWjWLfWwbJCQqBSlbB",
    "cjPChhswrNVtMZJjVM",
    "pfvTFvTzLBFndGTlJmVJZmNlCMGtCJ",
    "nfvFTfpbBFdSFpTLswsWDbchwHCWHrbw",
    "lNdNPLJJLHHHlpPJcvtVcsBBrrBvBqrVrC",
    "wDTbwTQRZTMWsVWtmWhhTr",
    "nzRMbSZtMQDnpzzJHLHNflHP",
    "HrwwmwcRbmwcbrrTbwwcrTJWLlPshllhLccqLhnnlljhZhjZ",
    "GMFMSNSpCBSFSdGpNFpBznLlzzhzshlGhhqPhGGL",
    "nFFSCCSSfttBdddDQNDBQpSSrbrmWJwrHfJHWJrbVwWHrgVr",
    "SdddNNCmpNNDhMswhsmbhvHM",
    "frtzqqqFjgrWfgfqtthsnvRHZRRvFlhnvRZb",
    "rtrgqzzrbWtqLGLLtBWzfGcTNCCVGpSNDppTJJVddNpPSG",
    "WWJvJvBgpHSHScQRQSVQLzqL",
    "ddZTlZGZVfQhZRLLMqsR",
    "rPfwrGGrFjjNTGNCCVBggDJHmNDvbmmpmNJJ",
    "bbGrJPRVPtfsVfFlMjBV",
    "WQzhQQQNZQCWNnQDhzWdNjFZggmlHjjmMmMFjFHpMs",
    "CzQCSWDTWhNhzWhTGJwtRRqTblwcclvP",
    "HLDvZgZldDTnLLsswMpVLn",
    "FNVQzQSPznCMmpBwCF",
    "SqfJPfttqffjJPVlhvhZZtvdVDRZ",
    "jVsLvHvvdrSjpJFsGzmnmltnml",
    "nTNTRCTBTmmmFPMJ",
    "CQnCggWQDgBrrSqHjDDfSS",
    "ZpNlrZNcmctZbcZlmcmZhhpPvPHvwBMHJPMTMHBTFJvJ",
    "zmdCnGzGRnLDjQnzPvMFVHMVMLTVwMJv",
    "GGjqssqgzCnCzQsshcffmrbNrrNZtW",
    "DNpTwhpLlWMDWNMhbJjGttJFHgDcjtjG",
    "wqQrdCdqbFtCtJtJ",
    "vffdrwfPrsmqVBBWRVlRRlTSTWSTlR",
    "ZqTCTQQTFvsDSsBDvWBd",
    "hfBLzRLtHHLDDWRRWWDNbd",
    "pHhhnPzLfJcJhzHLzZjcmwCTqTQgwBqqwg",
    "WJHgqgFqrVrqgqCHwsJHHVFZzppZFGGfTtpcfbdpzzpd",
    "RvNMQlMBhwMdMfcpbM",
    "LLRQNBDSSNSwmDDBQRBRBCHsgrgHLVnJVqLsJsnCPJ",
    "BFhGsDsDsBtsPGtQDrrMdbdrffrffbJbRt",
    "cVVqScVSWWvVWgVZjnrHJgLfdrLrnrLLLQ",
    "WmvqNZzzzZSvVzqvcccSzSmqFGCDTGBPQGDhwCDhNDCwPBQp",
    "RqTlHHTTrQqHlTqsrVDqHbrZFZwhpBhphZBFhZpDpLLLfB",
    "nSzGCGdvzdGNPBQQBfhLZfFwFN",
    "WPPPCJMtJSQMJQCCWMJslRrrRgrMRbRqVqqTRR",
    "BMtfLsLZfTPmCtGWZrZqJNJqvpZdWr",
    "bRwgHhhRhbbSRbjSglcgwHHJWPcJdPrnNWrnqnWVVqpdnq",
    "bgjlSgDljHhjgwMPCLPFDMFPGGBC",
    "zJWjczcWjSWghZgzgSSSZflTqwlfqTTbnQwhdTnMdl",
    "NrGVCmNpHFPsrJFbFQMJbJdQTn",
    "JvrtpHHmrCGJCJmNvNpVCsHVgzWgWDDcjjgjDRStWWDLSgzz",
    "HzdFsBBVsfnTfsPmPtDcZqtMhDDz",
    "wrjjRQLlwwwrJQLQbCrbwlJDSlcSDtPZmPSDclWDtcDqWh",
    "RwgprLbNLrLbCCpRCrJLRLFfsGTNNZHBZnnBvvfffnvd",
    "MlqqlWZclnPtZtDSSvwQQjgQpNQSRM",
    "rLJTsBrsJBhshTNNwSQBWNvNgNSg",
    "JbbbChCHsJzHzbWdGHThlFnnPqlPlGPPGncPtFlD",
    "WcMVvwNNvjRcwTQwVcpNRcspPCFtbPztbCTFmtPtCJtbCzmz",
    "grrgDhrnDLnLrdfdLZlLZhmCqzlCbtJlSSStFmttqsJJ",
    "GHHDdgnLDDhrrrgZrZgLNVVVVcRNvcwjWvpWGcRs",
    "qhGhPSJtGhGtJtvNjnJjnvmNQQmj",
    "sRBFlbZsrdBRRGbVGBDwDMDQwQwMNDjjjVNV",
    "CzCflffbBszdBCbdbrtLcfhhgHLGgPccLSPh",
    "zShhHFzgJWFVFFHFHhRPNjwqPLPtLbtrbwVjjr",
    "ssnvTmvCDfpCZTnsfCqwNLNPwbJqNJPwrjZw",
    "vDvpmcnmnBDnsnJTJmQWMHMWzScFggRFRFSW",
    "nnVHHPLrnpssLnrpLRnHtHrjJcCdzCjcDzMzdqwRdjdDcJ",
    "WWTGQQzSGWlTmBbDJJjwMJjcvvlDjw",
    "TGTWBTWmTbgzghZhgzBgpVNrZPPfntfNrVLNNnZP",
    "TqhQnqqLnnqddttNqQWdtqQmppSSFFClRmzmFZFLSmSlFF",
    "BcHjGclVPPBrVrcjrGGDrMgcmmRJbRCFzpZmSDRpRZJJmRzz",
    "ccGjMgvPvsHMgvBHWlhQdqwtllwNdThs",
    "WjddwRGgHRRdMbrwHRwWjHDtDZplslnJnZrsDvCprJPJ",
    "QSLLFqQBffCFststlFnn",
    "CSSmSqzmVVjWMdMjVWgT",
    "lTfQRhVpRzjThpRQTTTlvHrvBvHnPMHgHqHJvn",
    "cGDctCwCdDCGSFcJsFJsFBvgnMBrHvvrqngHgmgssg",
    "SCbSDSFScNpfbRVVJf",
    "RrwmdwMVjMjMTghDWNTJDpWfWG",
    "SbPvNbvbSsPbSvZsPJtJWhHpGGGgJWgJ",
    "lSFvsLNcqzqLrwnFQMnVdmnn",
    "FgCJFTWntWTFtPLmJmmQJmCMMpljWZBwlGMljjjlwvwBvZ",
    "SDSbVbdScSDzbLZMBrjlZpVrZp",
    "ccsSDhSDffzbLNscfcfDcgqhPgTntqmnQmCgtgQCTJ",
    "VnCnrHnPPrCwHmVWtqfMQQqzCqffCZ",
    "DDbDcJJJbpJDGppFpqGZRWfGfddzMWtfWM",
    "tTTglDcgFjwNPHPPwHlH",
    "bMGbqqgPqqVVMGnbVqSMmRfPcJmCTPDDLJDTCmDm",
    "FFjjZvFRsFCctmtvtJWD",
    "wwFhHjQjwQhZrFjQbngglGbRMnSzgbRH",
    "GPTTJSgTPrPPmcTPpdJsGGGjqbRvqlztqlRqMzGjRv",
    "LwnfWLNwwHHQwHnjbbMMjWttqtMmMj",
    "mhwfBDhnQTpJBcBJps",
    "HQQHwMfwlltzMlVljQhVjjHPPPFGPFcCGprPTPPfDrDcGf",
    "pRLdvRvJgqLRBSJCcvFnCDTPTcTGnT",
    "LBLSJbRSLSqbSdBdgJRRqRbwjHHblQttlwtwhzpjMlwhpw",
    "NWLNSNSDtgSgghgdcwccmwGntwclnT",
    "FRCQzJRsvfVVjvzFJfQnffwCcmdwmHmmHmTwmCmdGBcq",
    "sjfJvjfzPRPzvPPVFMssvSLhSSWrMZnSDNrDDhSLZZ",
    "FvLpSLtCfPCWhRSZZMZJSW",
    "jbbjwbHjQmHjHsQrQFMnwTnJznwRzhJRnNTM",
    "gVrjqGqjgrgsFGLDtDBLLfLB",
    "cgTvRWWLVScRWflNJJDfVJmVlG",
    "nPPnnmqjmZHCHBHFdfwNsDhzzfJznhsfhw",
    "bddmQqQjpdFCQWtLQMMSvMMQRS",
    "wjnmPwCgjPnRlwnmvmvvPnTwbSSLLvsLDWdbbWzvsLzWbzbz",
    "NqrGqFHqJlfhhJGbszdWQzzLNtQDzz",
    "FfHFpphrJqJrpGBffcTnBjCnVTMjMRCnVljT",
    "SrfSJGJpSgMprMHdhBGhsdsshdGsmm",
    "nRTRPvQllQlblwvCjTwLTnvBqdhmHDPVsmDmdqshDVhNsP",
    "lbRFHvRwlnlLbnbjLbLjLCzggSpWfMFzSZpzZFJJWpJr",
    "vNLlFldlvPtHFPHQRt",
    "jcpRsScDgshzjqzfVStntBTPMTnmWttntMpp",
    "fSssgVjDsbqSVbCJClLRJLCZRZZb",
    "wnHmCJccDDcrNnrNMRDtTzpTlMpTzpBp",
    "PjSPPGjWjLzTjjMtzzMj",
    "hWvLLFWvHvczVcVn",
    "jgtngnnhMthcnLjMgCZvChDsmdNCvNNZDN",
    "bWqFPbFbLzRFfZBNDNNPZsNd",
    "RbJzGpzVLLLWHHQgTMwcTptQ",
    "sJBhsMWQnhhrFBsFhlQQMfrDCDpLlVCddjTdDDpqDLTLdj",
    "tZHHSRmNHcgmNzpDPJtttqjLqdpL",
    "HbNbZmcHQJbsFWvs",
    "VgPNWGbgSjGjfhRRFfzThtmtzF",
    "qLCQJBqqcPPmLHhHFz",
    "CcJvplQswNgZlNPSbS",
];

let sum = 0;

for (let i = 0; i < input.length; i+=3) {
    letter = "";

    for (let a = 0; a < input[i].length; a++) {
        for (let b = 0; b < input[i+1].length; b++) {
            for (let c = 0; c < input[i+2].length; c++) {
                if (input[i][a] == input[i+1][b] && input[i][a] == input[i+2][c]) {
                    letter = input[i][a];
                    break;
                }
            }  
            if (letter != "") {break;}      
        }
        if (letter != "") {break;}
    }

    let value = 0;
    
    if (letter == letter.toUpperCase()) {
        value = letter.charCodeAt(0) - 65 + 27;
    } else {
        value = letter.charCodeAt(0) - 97 + 1;
    }

    sum += value;
    
    console.log(value)
    console.log(letter)
}

console.log(sum)