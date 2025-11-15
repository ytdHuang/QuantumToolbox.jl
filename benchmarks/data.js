window.BENCHMARK_DATA = {
  "lastUpdate": 1763178160605,
  "repoUrl": "https://github.com/ytdHuang/QuantumToolbox.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d852a1f35bd1945d5a76f609b6030a565ad401c",
          "message": "Change the type of `dims` for `QuantumObject` to `SVector` for type stabilities (#217)\n\n* Improve c_ops handling\r\n\r\n* Format code\r\n\r\n* Change dims to SVector\r\n\r\n* Fix JET errors\r\n\r\n* Fix dfd_mesolve issues\r\n\r\n* Fix entanglement issues\r\n\r\n* Fix low rank dynamics\r\n\r\n* Fix all tests\r\n\r\n* Format code\r\n\r\n* Change to StaticArraysCore.jl and minor changes\r\n\r\n* Make a few comments on the documentation\r\n\r\n* Update some docstring\r\n\r\n* Minor changes\r\n\r\n* FIx error on Documentation",
          "timestamp": "2024-09-08T11:01:20+02:00",
          "tree_id": "693a470fcfafd6b6bfb36f5b1bd802f9c9cef2e8",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/4d852a1f35bd1945d5a76f609b6030a565ad401c"
        },
        "date": 1725787439148,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7658137.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598667962,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67710885,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3667136\nallocs=214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13784294.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42819941,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1499808597,
            "unit": "ns",
            "extra": "gctime=32278782\nmemory=3202959776\nallocs=447203\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4683628.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26609392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 243059168.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5350576\nallocs=69965\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 124257728,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5358688\nallocs=70409\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f556c33166b5fb5fc7045eee0a8e5cbc39035a88",
          "message": "Drop `Julia v1.9` (#218)\n\n* drop `Julia v1.9`\r\n\r\n* fix benchmark\r\n\r\n* fix links for ODE solver in docstrings",
          "timestamp": "2024-09-08T15:53:18+02:00",
          "tree_id": "bcf41d08df9d8d3280d86bd53ba29678db38a3f5",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/f556c33166b5fb5fc7045eee0a8e5cbc39035a88"
        },
        "date": 1725812371962,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7039113.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597300097.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67471403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3667136\nallocs=214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13765065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42710925.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1469591462,
            "unit": "ns",
            "extra": "gctime=34249539\nmemory=3202959776\nallocs=447203\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4684736,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26646590,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 240159391.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5354928\nallocs=70237\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 124406315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5367760\nallocs=70976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13b0413f427a95e6113a27b3731640a0551caae8",
          "message": "Add CUDA.allowscalar(false)",
          "timestamp": "2024-09-10T14:19:10+02:00",
          "tree_id": "af8392382091d81232f0f973b88c77381c6d0114",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/13b0413f427a95e6113a27b3731640a0551caae8"
        },
        "date": 1726040541031,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7124471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603061099,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80564015.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13871953,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43286129,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1397538762,
            "unit": "ns",
            "extra": "gctime=35919568\nmemory=3468510336\nallocs=162869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4688734,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26498186.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 241419456.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5360592\nallocs=70591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 124388566,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5358576\nallocs=70402\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b40c82cc62b3e6c6bc37cfe76b6983956d67568a",
          "message": "[Docs] \"Manipulating States and Operators\" and \"Tensor Products and Partial Traces\" (#223)",
          "timestamp": "2024-09-17T08:51:34+08:00",
          "tree_id": "fd5da768405922e115b33be1c1ba345ee79cf69d",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/b40c82cc62b3e6c6bc37cfe76b6983956d67568a"
        },
        "date": 1726534708693,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7042036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 594524856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79723031,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13840797,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 44261309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1424458814,
            "unit": "ns",
            "extra": "gctime=37142704\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4720026.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27456053.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 273056125.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8238320\nallocs=100060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 138720755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8146912\nallocs=99031\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93c3ff62c3590e1e6e97c31f6814096778c11310",
          "message": "Change version to v0.14.0",
          "timestamp": "2024-09-17T09:43:00+02:00",
          "tree_id": "6058a21c6d6042bf8e88e3518954dcd688193b4e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/93c3ff62c3590e1e6e97c31f6814096778c11310"
        },
        "date": 1726641787987,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7112006,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600814855,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80862633,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13808355.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 44753354.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1402003589,
            "unit": "ns",
            "extra": "gctime=34192709\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4722256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27533581,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 273526003.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8214552\nallocs=99938\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 141141230,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8268640\nallocs=100680\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5af51a267ec83daaaec6c0a81cffe5768916c369",
          "message": "Fix type conversion of `tlist` in time evolution (#229)",
          "timestamp": "2024-09-20T18:23:21+08:00",
          "tree_id": "28847ca5c5ff4c191566e21c2b25d77b48f52b73",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5af51a267ec83daaaec6c0a81cffe5768916c369"
        },
        "date": 1726985065416,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7059706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 608053073.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 71865669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13888842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43235623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1378740386,
            "unit": "ns",
            "extra": "gctime=31320999\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4724237,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26883522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 273978219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8222744\nallocs=100156\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 142000155.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8288736\nallocs=100745\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e21f940ff7504256ce71dda41b5564b89557619c",
          "message": "fix CI config (#232)",
          "timestamp": "2024-09-22T18:26:35+02:00",
          "tree_id": "ababa9a8bc9240b60a4553aee71a5b8c3c194590",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e21f940ff7504256ce71dda41b5564b89557619c"
        },
        "date": 1727061639663,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7012766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597987956,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80857749.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13776489,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42785912.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1351082365,
            "unit": "ns",
            "extra": "gctime=26792252\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4725902.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26675737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 273750922.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8261528\nallocs=100652\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 140841010,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8202776\nallocs=99810\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd098b3e0e9a439d245fa118a76eedcf1760ae4b",
          "message": "Change version to v0.14.1",
          "timestamp": "2024-09-27T10:44:12+02:00",
          "tree_id": "d29c89dd4ee66009d2241fc69c5750242ec1ad70",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/fd098b3e0e9a439d245fa118a76eedcf1760ae4b"
        },
        "date": 1727437968935,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7134502,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597098088.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81311552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13761766.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43215231,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1362615503,
            "unit": "ns",
            "extra": "gctime=27115658\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4745483,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26628822,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 273989668.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8105832\nallocs=98698\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 141561439,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8090256\nallocs=98217\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6342342964fe58e1014abf693ce9c8be2473168",
          "message": "Change to version v0.15.0",
          "timestamp": "2024-09-27T21:11:41+02:00",
          "tree_id": "e162ffc0bafc9053eb05033ac2c6522f5f502a60",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/d6342342964fe58e1014abf693ce9c8be2473168"
        },
        "date": 1727491886831,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7101058,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601926264,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81743220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13900421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447624\nallocs=3384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 44624258.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1428629113,
            "unit": "ns",
            "extra": "gctime=40066155\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4727276,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27916288,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700336\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 275109860.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8255304\nallocs=100566\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 141847471.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8260552\nallocs=100730\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4df91fb6ac059f2c5fe03a80030655df4cd1abb2",
          "message": "[Docs] Update documentation for time evolution (#241)\n\n* update documentation for time evolution\r\n\r\n* separate `sesolve` and `mesolve` in docs",
          "timestamp": "2024-09-29T02:00:19+02:00",
          "tree_id": "8f1e5ebb11c47736c6ee0d6dd4675e410909c2b0",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/4df91fb6ac059f2c5fe03a80030655df4cd1abb2"
        },
        "date": 1727592727735,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7187172,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 607131523,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81662174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13688610.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447432\nallocs=3372\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43328215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1418867643,
            "unit": "ns",
            "extra": "gctime=26464647\nmemory=3468571712\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4745183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237376\nallocs=3098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26625300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700320\nallocs=770\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 273808878,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8322928\nallocs=101409\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 141066732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8160400\nallocs=99369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88519acc33f93406a0200896a3111a8f20e5ce14",
          "message": "Bump version to v0.16.0",
          "timestamp": "2024-09-29T10:52:13+02:00",
          "tree_id": "7620fed66b935246d7b0ecb692f773954d38df50",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/88519acc33f93406a0200896a3111a8f20e5ce14"
        },
        "date": 1727680711213,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7122325,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598197067.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79961726.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13799492,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447944\nallocs=3374\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43186894,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1364724909,
            "unit": "ns",
            "extra": "gctime=26646968\nmemory=3468572864\nallocs=163544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4752570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237568\nallocs=3099\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26603771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700512\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 274286983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8248576\nallocs=99544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 139614646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8322088\nallocs=100389\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3068b7a6af6caa70ddc6f9595612eb2f7d066dc",
          "message": "Replace `n_th` with `n_thermal` for QuTiP compatibility (#249)\n\n* make `n_th` to `n_thermal` and align with qutip\r\n\r\n* fix fontsize in docs\r\n\r\n* improve type stability",
          "timestamp": "2024-10-03T09:39:40+02:00",
          "tree_id": "e50310714f3d6f13c13b1f89e6ded7bad5a3fc26",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/a3068b7a6af6caa70ddc6f9595612eb2f7d066dc"
        },
        "date": 1727946723450,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7048722.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601498447,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79655335,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13749983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447944\nallocs=3374\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43093405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1399574182,
            "unit": "ns",
            "extra": "gctime=35588211\nmemory=3468572864\nallocs=163544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4706326.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237568\nallocs=3099\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26734203.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700512\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 275630036.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449968\nallocs=102031\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 140756451,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8197312\nallocs=98297\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bde91428875a70c4ee5c68c1ae90f0891e3b4de7",
          "message": "Fix return type precision for `n_thermal` (#251)",
          "timestamp": "2024-10-04T16:39:05+08:00",
          "tree_id": "9c95280428cd714bb24a41676cf4e6c645452c4a",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/bde91428875a70c4ee5c68c1ae90f0891e3b4de7"
        },
        "date": 1728031520173,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7161207,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599822122.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 71899046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13785755.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1447944\nallocs=3374\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43650346,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1389692064,
            "unit": "ns",
            "extra": "gctime=32309910\nmemory=3468572864\nallocs=163544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4718603.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237568\nallocs=3099\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26701964,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700512\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 274033379,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8359392\nallocs=101117\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 143980674.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8357192\nallocs=100780\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7a34832a65a7a99a62ffa588a61830b96db8b06",
          "message": "Bump version to v0.17.0",
          "timestamp": "2024-10-04T16:17:52+02:00",
          "tree_id": "72b862449d077339ced60044b8574fbeecc98429",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/c7a34832a65a7a99a62ffa588a61830b96db8b06"
        },
        "date": 1728099483574,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7113532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 605483272.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81610625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13717338,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1446136\nallocs=3346\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43137283,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1367141659,
            "unit": "ns",
            "extra": "gctime=33325927\nmemory=3468572752\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4690459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237568\nallocs=3099\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26487746.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700512\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 274295350.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8406816\nallocs=101093\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 191127595,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8388096\nallocs=101045\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cec3e08da122212290fbb63fe7de8f62500f0104",
          "message": "Update README.md (#258)",
          "timestamp": "2024-10-05T09:40:07+02:00",
          "tree_id": "562cad9b27f406dcad614e9cbe45b4fff543734f",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/cec3e08da122212290fbb63fe7de8f62500f0104"
        },
        "date": 1728115184619,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7052490,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601038623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80576825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3666032\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13692562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1446136\nallocs=3346\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43049532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1344337808,
            "unit": "ns",
            "extra": "gctime=32182788\nmemory=3468572752\nallocs=163541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4725629,
            "unit": "ns",
            "extra": "gctime=0\nmemory=237568\nallocs=3099\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26263759,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3700512\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 276508235,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8425000\nallocs=101472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 189445728,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8435184\nallocs=101490\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87ce64e13b82c10f3886e1dcda67e9c1edfb1afe",
          "message": "Dispatch progress bar method in EnsembleProblems (#259)",
          "timestamp": "2024-10-08T13:58:47+08:00",
          "tree_id": "93fae91c400dfa6f9b5c7eab76ca865b3182bed1",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/87ce64e13b82c10f3886e1dcda67e9c1edfb1afe"
        },
        "date": 1728367736511,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7180272,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10730792\nallocs=477\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597877295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80162201.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14003927.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1428248\nallocs=3753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43006382.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4809216\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 2081719409,
            "unit": "ns",
            "extra": "gctime=686529498.5\nmemory=3504189664\nallocs=303327\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4519592,
            "unit": "ns",
            "extra": "gctime=0\nmemory=228032\nallocs=3135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26797257.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3695120\nallocs=984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 271518110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8456488\nallocs=111915\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 139888386,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8516168\nallocs=112963\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "110c2e5715646c3f7dcfe73d9efd073131e261ff",
          "message": "Bump version to v0.18.0",
          "timestamp": "2024-10-10T01:48:51+02:00",
          "tree_id": "86e2edc4cba84a21280d359092332486ba749f32",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/110c2e5715646c3f7dcfe73d9efd073131e261ff"
        },
        "date": 1728626061065,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7137737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10730792\nallocs=477\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 570839821,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 70850300.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13075455,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1428248\nallocs=3753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 40132679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4809216\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1870822033.5,
            "unit": "ns",
            "extra": "gctime=624916757.5\nmemory=3504189664\nallocs=303327\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4269524.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=228032\nallocs=3135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 25447356.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3695120\nallocs=984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 256191825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8531680\nallocs=112123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 131002680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8591240\nallocs=113212\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3f131354c3030eb906bb0f4bcfc434c46d11f0a",
          "message": "Make ProgressBar mutable (#268)",
          "timestamp": "2024-10-15T22:29:16+09:00",
          "tree_id": "502604f39fbd13deff7a04a14e5cba09e9b44160",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/d3f131354c3030eb906bb0f4bcfc434c46d11f0a"
        },
        "date": 1729171330998,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7103305,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10730792\nallocs=477\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599191783.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 74554685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13899089,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1347128\nallocs=2753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42852177,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4809216\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 2091101986,
            "unit": "ns",
            "extra": "gctime=702840645\nmemory=3504179968\nallocs=303227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4451032,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147552\nallocs=2135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26812165,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3686640\nallocs=884\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 260950314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7307568\nallocs=102103\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 133585442.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7441784\nallocs=104499\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33577062136b89dde85b9aefbbc93a9b4889b93d",
          "message": "Introduce `QobjEvo` and use `SciMLOperators` for time evolution (#266)\n\n* First working implementation\r\n\r\n* Minor changes\r\n\r\n* First working case of sesolve\r\n\r\n* Minor changes\r\n\r\n* Rebase commits\r\n\r\n* Apply Yi-Te comments\r\n\r\n* Working mesolve\r\n\r\n* Make dsf_mesolve and dfd_mesolve work\r\n\r\n* Minor changes\r\n\r\n* Working version of ssesolve\r\n\r\n* Remove sleep in runtests\r\n\r\n* Remove OperatorSum and TimeDependentOperatorSum\r\n\r\n* Remove alg as argument from all problem definitions\r\n\r\n* First working  runtests\r\n\r\n* Add tests for QObjEvo and time evolution\r\n\r\n* Add docstrings to documentation\r\n\r\n* Reduce tolerance for stochastic runtests\r\n\r\n* Make runtests multithreaded and reduce time for timeevolution tests\r\n\r\n* Add QobjEvo tests and minor changes\r\n\r\n* Update docstrings\r\n\r\n* Add comment on the use of MatrixOperator",
          "timestamp": "2024-10-22T10:39:16+02:00",
          "tree_id": "68be237c99ee29b09fabc25d5908931dc041b81e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/33577062136b89dde85b9aefbbc93a9b4889b93d"
        },
        "date": 1729816996373,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7398456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10730792\nallocs=477\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598550034.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 73630210,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14323648.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1346568\nallocs=2760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42761030.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4809216\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 2133713272.5,
            "unit": "ns",
            "extra": "gctime=771068401\nmemory=3504117648\nallocs=302381\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4517060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147408\nallocs=2136\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27084942,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3686176\nallocs=879\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 248433637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4938256\nallocs=66823\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 125487377,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4941008\nallocs=66932\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5ce558695260b2b38030ee826fa7cbd1541ccac",
          "message": "bump version to `0.19.0`",
          "timestamp": "2024-10-25T21:28:36+09:00",
          "tree_id": "0549731c76f77f3e3153a6c5c9636491b961190e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/b5ce558695260b2b38030ee826fa7cbd1541ccac"
        },
        "date": 1730020343973,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6956159.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10730792\nallocs=477\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599831548.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67948507,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13945517,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1346568\nallocs=2760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42325552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4809216\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 2110213513.5,
            "unit": "ns",
            "extra": "gctime=730855252.5\nmemory=3504117648\nallocs=302381\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4458255,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147408\nallocs=2136\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26879663.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3686176\nallocs=879\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 247580124,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4943952\nallocs=67179\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 125284123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4943440\nallocs=67084\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3207e188de07cdd1e4d8f31b2d596d89a2e505dd",
          "message": "bump version to `0.19.1`",
          "timestamp": "2024-10-29T09:52:09+09:00",
          "tree_id": "45b9421dce704f5357cc9242447483561795f7db",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/3207e188de07cdd1e4d8f31b2d596d89a2e505dd"
        },
        "date": 1730164427231,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7007580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10730792\nallocs=477\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 592604233.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79248536,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14023888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1346568\nallocs=2760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42444600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4809216\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 2025679292,
            "unit": "ns",
            "extra": "gctime=703026115\nmemory=3504117648\nallocs=302381\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4439369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147408\nallocs=2136\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26822813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3686176\nallocs=879\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 254378789,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4939072\nallocs=66874\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 129896279,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4929104\nallocs=66188\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25bee9fed9c106ccb8e5ffa515e1eb9b1598a055",
          "message": "Support time-dependent `liouvillian` (#277)\n\n* support time-dependent `liouvillian`\r\n\r\n* improve codecov\r\n\r\n* format files\r\n\r\n* minor changes",
          "timestamp": "2024-10-30T14:44:40+01:00",
          "tree_id": "67fd422f662615c25ac78882c20057bf20069904",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/25bee9fed9c106ccb8e5ffa515e1eb9b1598a055"
        },
        "date": 1730339853202,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6933072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284488\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600285830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 66579358,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14066652,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1293480\nallocs=2730\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42420857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791520\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1924584300.5,
            "unit": "ns",
            "extra": "gctime=574090766.5\nmemory=3066240208\nallocs=301583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4444086,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147408\nallocs=2136\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27378972,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3109120\nallocs=858\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 247113961.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4939472\nallocs=66899\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 125988482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4944208\nallocs=67132\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380d017eaffd589da418245018e5e2e34ecac003",
          "message": "Support time-dependent `lindblad_dissipator` (#280)",
          "timestamp": "2024-11-02T09:10:52+09:00",
          "tree_id": "0c21a36227c237bb82df0acee49e03c68d8478e3",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/380d017eaffd589da418245018e5e2e34ecac003"
        },
        "date": 1730506758147,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6857937,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 591538981.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 72440495.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14025758,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1293960\nallocs=2730\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42178886,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1818955326,
            "unit": "ns",
            "extra": "gctime=533893106\nmemory=3066234224\nallocs=301583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4439393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147056\nallocs=2129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26989547,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3109280\nallocs=856\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 248328544.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4923216\nallocs=65883\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 124794607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4944464\nallocs=67148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c63e627568f4349baa783d7efa32ff4f49f74f39",
          "message": "Bump version to `0.21.0`",
          "timestamp": "2024-11-04T11:54:27+09:00",
          "tree_id": "42e8181b5d453593958c7783413680a7f3e02555",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/c63e627568f4349baa783d7efa32ff4f49f74f39"
        },
        "date": 1730689625652,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7369833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 591951481.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79134065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14005813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1293960\nallocs=2730\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42215131,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1797049589,
            "unit": "ns",
            "extra": "gctime=536449101.5\nmemory=3066234224\nallocs=301583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4460536,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147056\nallocs=2129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27075480.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3109280\nallocs=856\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 234530267,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4821360\nallocs=66101\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 117163703,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4828688\nallocs=66496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8c9479fa868b0ac4c2eb687a8eba15b20174bd5",
          "message": "Bump version to v0.21.1",
          "timestamp": "2024-11-05T13:56:30+01:00",
          "tree_id": "7aef8e33b22c838cc6ce44e74a40becafad8bbfd",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/c8c9479fa868b0ac4c2eb687a8eba15b20174bd5"
        },
        "date": 1730859142978,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7334773,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 605543575.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79954876,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13861784.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262056\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42905150,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1902324578,
            "unit": "ns",
            "extra": "gctime=589228554\nmemory=3066228928\nallocs=301318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4382935,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106640\nallocs=113\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26789059.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104240\nallocs=602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 230756420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3903952\nallocs=14763\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 116788745.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3905152\nallocs=14775\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "064df6b01ef3530e1ee06f4df912c520049b5c60",
          "message": "Fix `VersionPicker.vue` (#297)",
          "timestamp": "2024-11-11T12:53:56+01:00",
          "tree_id": "76eb8ac53876e3849248b0b5a1bbb288d40e61c5",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/064df6b01ef3530e1ee06f4df912c520049b5c60"
        },
        "date": 1731327109830,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7175568.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597120590.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67069862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14349816,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262056\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42783316.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1884485382.5,
            "unit": "ns",
            "extra": "gctime=580819598.5\nmemory=3066228928\nallocs=301318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4424984,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106640\nallocs=113\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27483275,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104240\nallocs=602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 230157196,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3903952\nallocs=14763\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 117380089.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3905152\nallocs=14775\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f15facbe5aecd7eca9c15d3be588ffbb31cc0b4c",
          "message": "Fix the location of `versions.js` (#299)",
          "timestamp": "2024-11-11T23:23:50+09:00",
          "tree_id": "4005be1774d13f166d94eb172522906b3ada0e7f",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/f15facbe5aecd7eca9c15d3be588ffbb31cc0b4c"
        },
        "date": 1731336344269,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7159484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596738562.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80375126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13961650.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262056\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42879339,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1853283458.5,
            "unit": "ns",
            "extra": "gctime=552662532.5\nmemory=3066228928\nallocs=301318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4358765,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106640\nallocs=113\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27222318,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104240\nallocs=602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 229857035,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3903952\nallocs=14763\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 115239529.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3905152\nallocs=14775\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43535b01d625ce171c83c0c1eccf2720a97a384e",
          "message": "Bump version to v0.21.4",
          "timestamp": "2024-11-13T14:52:58+01:00",
          "tree_id": "e5fabfc7e7d7cbfd2d96132b4e28c353d4552e33",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/43535b01d625ce171c83c0c1eccf2720a97a384e"
        },
        "date": 1731550980102,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6885560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 594124230,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79577487,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13974322,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262056\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42425609.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1833010697.5,
            "unit": "ns",
            "extra": "gctime=528116835.5\nmemory=3066228928\nallocs=301318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4369463,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106640\nallocs=113\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27085389.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104240\nallocs=602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 226255778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3903952\nallocs=14763\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 116414466,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3905152\nallocs=14775\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afded9ad739b13ad3e35e26bf6ccff239f361c46",
          "message": "Bump version to `v0.21.5` (#309)\n\n* bump version to `v0.21.5`\r\n\r\n* bump version to `v0.21.5`",
          "timestamp": "2024-11-14T16:39:46+01:00",
          "tree_id": "b9ae2b42fab6235b67098bc78fb74b211c5dbdca",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/afded9ad739b13ad3e35e26bf6ccff239f361c46"
        },
        "date": 1731637306599,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6957462,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 590407917.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79294940,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13814315.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262056\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42309298,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1822096290.5,
            "unit": "ns",
            "extra": "gctime=526039095.5\nmemory=3066228928\nallocs=301318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4335788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106640\nallocs=113\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26866933.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104240\nallocs=602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 227582697,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3903952\nallocs=14763\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 115213827,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3905152\nallocs=14775\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "276522adb8a5f6894acacf40638b44368e00c601",
          "message": "Add benchmark comparison in the README file (#317)",
          "timestamp": "2024-11-20T11:39:23+09:00",
          "tree_id": "4fc721eaf00b05a22cefaad5717d617d1847836c",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/276522adb8a5f6894acacf40638b44368e00c601"
        },
        "date": 1732086124500,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6907022,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 602014491.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 71004668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13862711.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262456\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42450676,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1942217002.5,
            "unit": "ns",
            "extra": "gctime=614755803.5\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4334955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27005169,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220281358.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 111100034,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab66af58a6be14debf8c58f56bb1ebafc59127de",
          "message": "extend methods for `_FType` and `_CType` (#320)",
          "timestamp": "2024-11-22T11:56:22+01:00",
          "tree_id": "f7a36a683c3ce0fb4a1580cad4de5fd05fdd397c",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/ab66af58a6be14debf8c58f56bb1ebafc59127de"
        },
        "date": 1732586096042,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7563417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603823325,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80086250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13869929,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262456\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42760005,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1768349580.5,
            "unit": "ns",
            "extra": "gctime=484315905\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4320975,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27011038,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 222077076,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 113030686,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b314479ce4e49b52bc25a4816f0d0ba67054ce83",
          "message": "Change SingleSiteOperator with MultiSiteOperator (#324)\n\n* Change SingleSiteOperator with MultiSiteOperator\r\n\r\n* Update changelog",
          "timestamp": "2024-11-29T16:05:29+01:00",
          "tree_id": "27dfd8c1b07e6e0c8ab31813fbdb54dbd86dda60",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/b314479ce4e49b52bc25a4816f0d0ba67054ce83"
        },
        "date": 1732894928646,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7074472,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596147952,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79962639,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13883214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262456\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42440110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1788916323.5,
            "unit": "ns",
            "extra": "gctime=491089963\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4347344,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27030970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 221277156,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112658714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a9a80d7593c46d60607de3daa3cfe1c31ed0168",
          "message": "fix typo in `spectrum` docstrings (#325)",
          "timestamp": "2024-11-29T16:52:05+01:00",
          "tree_id": "27d79e4a4867708427305040436aa06d449d1c7c",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/9a9a80d7593c46d60607de3daa3cfe1c31ed0168"
        },
        "date": 1732898169306,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6880025.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600222059,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80153479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13998751,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262456\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42273619.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1809908152.5,
            "unit": "ns",
            "extra": "gctime=486927265.5\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4333250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27029976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220472857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112375708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "532a17e3e6767da9f605e3b2543f14bc5d9d72c0",
          "message": "Bump crate-ci/typos from 1.27.3 to 1.28.1 (#329)",
          "timestamp": "2024-12-02T15:51:03+09:00",
          "tree_id": "d4c8592088f78e101536a62db68c241e51a27663",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/532a17e3e6767da9f605e3b2543f14bc5d9d72c0"
        },
        "date": 1733122775090,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6654693,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 593503307,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 66791250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13836144,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1262456\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42245380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1719749547,
            "unit": "ns",
            "extra": "gctime=462434669\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4302655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26593394.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 219759269.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 111808519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2e22492efb2a3ff61c125a69a1456fd891fbb42",
          "message": "bump version to `v0.23.0` (#331)",
          "timestamp": "2024-12-04T20:09:19+09:00",
          "tree_id": "5d70a9c53a0242fbb07edc924d37ded783e410ba",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e2e22492efb2a3ff61c125a69a1456fd891fbb42"
        },
        "date": 1733311412887,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6871565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 589572406,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 78528857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 28521304,
            "unit": "ns",
            "extra": "gctime=7778335\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42702287,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14062716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1682070187.5,
            "unit": "ns",
            "extra": "gctime=350266816\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4394770,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27066794.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220565249,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112248757,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff73a5a26872997b441e6b20eab2974f89524ce7",
          "message": "fix typos in documentation (#336)",
          "timestamp": "2024-12-06T09:56:13+01:00",
          "tree_id": "296b5d2b61fccaa290080370f5bd41cfae24748b",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/ff73a5a26872997b441e6b20eab2974f89524ce7"
        },
        "date": 1733543006600,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6797711,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599522839,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80611560.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 27861223.5,
            "unit": "ns",
            "extra": "gctime=7412429\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42352297,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13726132.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1579935356,
            "unit": "ns",
            "extra": "gctime=339453250\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4346296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26854574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220128270.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 111475518,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e108e19a52715915e236f37f7a300069d342ef3",
          "message": "Improve the construction of `QobjEvo` (#339)",
          "timestamp": "2024-12-10T09:18:21+01:00",
          "tree_id": "3e110eae40d2c0ab56633d76f36ddc1a8170282e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5e108e19a52715915e236f37f7a300069d342ef3"
        },
        "date": 1733892900020,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6670715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 590229385,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79424182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 27006501,
            "unit": "ns",
            "extra": "gctime=6482700\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43718016.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13818029,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1687678043,
            "unit": "ns",
            "extra": "gctime=340398171\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4372829,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27377234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 219863793.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112159082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e754148481e5fe4d69d276cf00068303b8c20cbd",
          "message": "Support `zero` and `one` for `AbstractQuantumObject` (#346)\n\n* support `zero` and `one` for `AbstractQuantumObject`\r\n\r\n* update changelog\r\n\r\n* fix changelog",
          "timestamp": "2024-12-11T09:08:32+01:00",
          "tree_id": "0f42b5b6f37539f7e02b6adc60a3fa33383545c5",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e754148481e5fe4d69d276cf00068303b8c20cbd"
        },
        "date": 1733990932151,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7443638,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597340761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 73140183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 32223881,
            "unit": "ns",
            "extra": "gctime=9654961.5\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42796028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13672889.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1743223575,
            "unit": "ns",
            "extra": "gctime=382476711.5\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4297306,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26650882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220361794,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 111128370.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5392ee5ebcd79d9275dfb4528c7e356258bc0bc",
          "message": "Bump crate-ci/typos from 1.28.2 to 1.28.3 (#352)",
          "timestamp": "2024-12-16T18:12:27+09:00",
          "tree_id": "54bc24a78e26bb7153c7b87919326a45384b7be3",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/f5392ee5ebcd79d9275dfb4528c7e356258bc0bc"
        },
        "date": 1734486541681,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6885453.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 590479053.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80042996.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 28166902,
            "unit": "ns",
            "extra": "gctime=6725377\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43789544,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13801292.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1635956684.5,
            "unit": "ns",
            "extra": "gctime=332921714\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4373024,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27252415,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220163883.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 111443377,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "270d3f69f79a171b9c5feec9cfb12191c8553753",
          "message": "Simplify synonyms (#355)",
          "timestamp": "2024-12-20T15:40:22+01:00",
          "tree_id": "47d026cd853cad3db215c1c4bbfcfc9df3f2daa2",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/270d3f69f79a171b9c5feec9cfb12191c8553753"
        },
        "date": 1734934884130,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6918738,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597710240.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79655182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 28739809,
            "unit": "ns",
            "extra": "gctime=7204356\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43871534,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13764183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1566888099,
            "unit": "ns",
            "extra": "gctime=337513503\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4315492.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27188898,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220983080.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 111856697,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6085242d0377526e4764f8e4abc6873ede0559d7",
          "message": "Fix raw html for Acknowledgements (#366)\n\n* Fix raw html in Acknowledgements\r\n\r\n* Change structure of acknowledgements\r\n\r\n* Fix raw html for acknowledgements",
          "timestamp": "2025-01-07T12:09:45+01:00",
          "tree_id": "a6d9fc8ea030a19e09268344e19e75f16ceb5d29",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/6085242d0377526e4764f8e4abc6873ede0559d7"
        },
        "date": 1736563262385,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6930027.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284584\nallocs=463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 606266138,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79822350,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 29713358,
            "unit": "ns",
            "extra": "gctime=8442793.5\nmemory=121472856\nallocs=104731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43237925,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791680\nallocs=1013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13774405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=862984\nallocs=690\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1821457935,
            "unit": "ns",
            "extra": "gctime=393051701\nmemory=3066226656\nallocs=301307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4345582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106096\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26933460.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3103712\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 221448050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563008\nallocs=12462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112047564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3564304\nallocs=12474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f81980df99e0f89edb7139aeb6c72fa71cee239",
          "message": "Introduce `Space`, `Dimensions`, and `GeneralDimensions` (#360)",
          "timestamp": "2025-01-13T10:30:16+01:00",
          "tree_id": "69ca9ab0fafb160acb2319707ac8343f03bd6a32",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/4f81980df99e0f89edb7139aeb6c72fa71cee239"
        },
        "date": 1736835579557,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6869070.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284712\nallocs=469\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 602162070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80821828,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 29559703,
            "unit": "ns",
            "extra": "gctime=7413190.5\nmemory=121473128\nallocs=104744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43714412,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791888\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14159524.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=863496\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1680882872.5,
            "unit": "ns",
            "extra": "gctime=362083928\nmemory=3066309904\nallocs=303537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4412907.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106208\nallocs=105\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27603160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104272\nallocs=606\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220750449,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563792\nallocs=12483\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 113331937,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565088\nallocs=12495\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f0b11620c709cdcb423275425d890279aa3b55",
          "message": "bump version to `v0.25.0` (#372)",
          "timestamp": "2025-01-20T11:52:14+09:00",
          "tree_id": "9b4e548c815574c4f944f8c2e6f469f533cbd145",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/d0f0b11620c709cdcb423275425d890279aa3b55"
        },
        "date": 1737342077274,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7076886,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284712\nallocs=469\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 604786342,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81158461,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 33439361,
            "unit": "ns",
            "extra": "gctime=9095779\nmemory=121473128\nallocs=104744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43939701.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791888\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14240653,
            "unit": "ns",
            "extra": "gctime=0\nmemory=863496\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1722721985,
            "unit": "ns",
            "extra": "gctime=368481355\nmemory=3066309904\nallocs=303537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4425082.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106208\nallocs=105\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27713943.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104272\nallocs=606\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 222517677,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563792\nallocs=12483\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 113468458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565088\nallocs=12495\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cc02248eb7fefb8442d4db9bc545090fbd88842",
          "message": "Fix dynamical fock dimension saving (#375)",
          "timestamp": "2025-01-26T09:21:13+01:00",
          "tree_id": "32d3ddf4c137d9c1410db8af28bbc819762d8ec4",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/9cc02248eb7fefb8442d4db9bc545090fbd88842"
        },
        "date": 1737952578997,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6899175,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284712\nallocs=469\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 605816808,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67535818,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 36074429,
            "unit": "ns",
            "extra": "gctime=12625950\nmemory=121473128\nallocs=104744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43027488,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791888\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14119557.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=863496\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1743624968,
            "unit": "ns",
            "extra": "gctime=370777967\nmemory=3066311728\nallocs=303594\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4407314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106208\nallocs=105\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27104464,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104272\nallocs=606\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 222839090,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563792\nallocs=12483\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112379603,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565088\nallocs=12495\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ca0815ad0fd8b913d3c0b479fbffe45b6b114a4",
          "message": "Bump version to v0.25.1 (#379)",
          "timestamp": "2025-01-29T12:17:00+01:00",
          "tree_id": "d77f1ac790c31bc5576571bed9a299862cd999c5",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/9ca0815ad0fd8b913d3c0b479fbffe45b6b114a4"
        },
        "date": 1738201512701,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6802023,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284712\nallocs=469\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596958476,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80425037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 32113360,
            "unit": "ns",
            "extra": "gctime=10072760\nmemory=121473128\nallocs=104744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 44101708.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791888\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14046083.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=863560\nallocs=715\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1720407099,
            "unit": "ns",
            "extra": "gctime=331197078\nmemory=3066311792\nallocs=303595\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4379865,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27663311,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104336\nallocs=607\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 222061995,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 113131907.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf7145d7b27a6dcb1c205fe6d6b8d97ab30fb48f",
          "message": "Move code quality dependencies to separate environment (#380)",
          "timestamp": "2025-01-30T11:15:42+09:00",
          "tree_id": "00d701f33f4b1fcee35b8f43830bb8491ce81df6",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/bf7145d7b27a6dcb1c205fe6d6b8d97ab30fb48f"
        },
        "date": 1738303971831,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7026280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284712\nallocs=469\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 607606153,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79782133.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 40055579,
            "unit": "ns",
            "extra": "gctime=14507877\nmemory=121473128\nallocs=104744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43001620,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4791888\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13818501,
            "unit": "ns",
            "extra": "gctime=0\nmemory=863560\nallocs=715\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1745874542,
            "unit": "ns",
            "extra": "gctime=369591329\nmemory=3066311792\nallocs=303595\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4353890,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27081086.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104336\nallocs=607\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 219990233,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112437456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c728f08107c8ef5dcbe006b8d044eed907fdd70",
          "message": "Bump to v0.26.0 (#390)",
          "timestamp": "2025-02-09T13:04:52+09:00",
          "tree_id": "075fc4f052ef0f911bd556982ecd29d41f46693c",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/8c728f08107c8ef5dcbe006b8d044eed907fdd70"
        },
        "date": 1739104785172,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6796053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596611061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79371901.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 31623359,
            "unit": "ns",
            "extra": "gctime=9772088\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43754670,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14039484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=882856\nallocs=728\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1736870772,
            "unit": "ns",
            "extra": "gctime=357802541\nmemory=3212054576\nallocs=304450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4394200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27952278.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3247760\nallocs=622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220187524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112603663,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b6e0d67cb2dda093935be465a0541832548e790",
          "message": "Fix of erroneous definition of stochastic term in  `smesolve` (#393)",
          "timestamp": "2025-02-11T10:15:06+09:00",
          "tree_id": "6881832a99022cb79209f54ec6cdf35ad37df7f5",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/2b6e0d67cb2dda093935be465a0541832548e790"
        },
        "date": 1739240166301,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6876485.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603490072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80929145,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 32276174,
            "unit": "ns",
            "extra": "gctime=10074765\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 44120163,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13923949,
            "unit": "ns",
            "extra": "gctime=0\nmemory=882856\nallocs=728\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1769100019,
            "unit": "ns",
            "extra": "gctime=358159617\nmemory=3212054576\nallocs=304450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4365539.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27513864,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3247760\nallocs=622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220570484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 113489714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c984f9536814e4bd61f419bca4f0283164ffe716",
          "message": "Change MultiSiteOperator function name to multisite_operator (#394)\n\nCo-authored-by: Yi-Te Huang <44385685+ytdHuang@users.noreply.github.com>",
          "timestamp": "2025-02-11T14:45:29+09:00",
          "tree_id": "ed94bed84d2c301764849867102a18c9644c7239",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/c984f9536814e4bd61f419bca4f0283164ffe716"
        },
        "date": 1739254597912,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6680376,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601177615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80221843,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 30082316.5,
            "unit": "ns",
            "extra": "gctime=9508140.5\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43762395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13963695,
            "unit": "ns",
            "extra": "gctime=0\nmemory=882856\nallocs=728\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1758848068,
            "unit": "ns",
            "extra": "gctime=356067215\nmemory=3212054576\nallocs=304450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4364431,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27445974,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3247760\nallocs=622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 220956893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112129059,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fbace49430ad480386e3b979e39f199ba1ae2b0",
          "message": "Fix stochastic solvers and add documentation page (#395)",
          "timestamp": "2025-02-11T19:09:38+09:00",
          "tree_id": "1b951f75af39152c3521692970b8190d909fd92a",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/2fbace49430ad480386e3b979e39f199ba1ae2b0"
        },
        "date": 1739279022554,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6926755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597890576,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79107219.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 32917534,
            "unit": "ns",
            "extra": "gctime=10260435\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43847208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 14231784,
            "unit": "ns",
            "extra": "gctime=0\nmemory=882856\nallocs=728\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1785121237,
            "unit": "ns",
            "extra": "gctime=375837563\nmemory=3212054576\nallocs=304450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4395135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27314239,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3247760\nallocs=622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 223096363,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 113112058,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "084c8a0c59a9358e406f8ab0407ec158b6aaae5a",
          "message": "fix changelog",
          "timestamp": "2025-02-14T09:47:06+09:00",
          "tree_id": "1795f2507fa6a31d1a1e3934ea10c18d5332d157",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/084c8a0c59a9358e406f8ab0407ec158b6aaae5a"
        },
        "date": 1739494534089,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6972696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 606854706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67466960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 36862424,
            "unit": "ns",
            "extra": "gctime=12979138\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43107747,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13882906,
            "unit": "ns",
            "extra": "gctime=0\nmemory=882856\nallocs=728\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1714768413,
            "unit": "ns",
            "extra": "gctime=382701370\nmemory=3212054576\nallocs=304450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4359284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27058921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3247760\nallocs=622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 223208914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112629403.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d48371cc48d2138ca3d65bee396950a9e53f43bf",
          "message": "Align `eigenstates` and `eigenenergies` to QuTiP (#411)",
          "timestamp": "2025-02-18T08:56:03+09:00",
          "tree_id": "a46403c35a2ceb4abb284a01678240ab3cabcc3b",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/d48371cc48d2138ca3d65bee396950a9e53f43bf"
        },
        "date": 1739841297588,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6784876,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596891198,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81105948,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 30300446,
            "unit": "ns",
            "extra": "gctime=9705729\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43783155,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13976327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=882856\nallocs=728\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1753842493,
            "unit": "ns",
            "extra": "gctime=335036151\nmemory=3212054688\nallocs=304452\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4350836.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=106272\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 27738930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3247760\nallocs=622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 221853641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3563856\nallocs=12484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 112439201,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3565152\nallocs=12496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300fd5de584c86eaca47e89a685e693e9a75c55f",
          "message": "Change save callbacks from `PresetTimeCallback` to `FunctionCallingCallback` (#410)\n\nCo-authored-by: Yi-Te Huang <44385685+ytdHuang@users.noreply.github.com>",
          "timestamp": "2025-02-18T11:50:24+09:00",
          "tree_id": "35fcf3356e072bb12a06991fa746507b4d32ff68",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/300fd5de584c86eaca47e89a685e693e9a75c55f"
        },
        "date": 1739851908528,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6775753,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 595574858,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80234271.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 31032160.5,
            "unit": "ns",
            "extra": "gctime=9961949\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43847522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7907540.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1410128209.5,
            "unit": "ns",
            "extra": "gctime=344885465\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1661674,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17974988.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151481654.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77019026,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d58e4690efbe53580553e9c4659ebc82d0d1eed",
          "message": "Introduce `operator_to_vector` and `vector_to_operator` (#413)",
          "timestamp": "2025-02-18T08:30:42+01:00",
          "tree_id": "52110a81a4febfb7f221a2a73981c4f5cb581bdf",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/7d58e4690efbe53580553e9c4659ebc82d0d1eed"
        },
        "date": 1739939085542,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6847331,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600901769,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80949755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 29838400,
            "unit": "ns",
            "extra": "gctime=9156532\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43762901.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7803116.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1403938260.5,
            "unit": "ns",
            "extra": "gctime=329876443\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1672755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17960121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150686736,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77221002,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46b98de36105478d87b81acd5de02e9d04837c5e",
          "message": "Introduce some entropy related functions (#416)",
          "timestamp": "2025-02-20T10:41:54+09:00",
          "tree_id": "c898a1d463d7736a3f251686a22ee4e06634399a",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/46b98de36105478d87b81acd5de02e9d04837c5e"
        },
        "date": 1740017964900,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6850644.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603844609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80927933.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 34338061,
            "unit": "ns",
            "extra": "gctime=11720704\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 44189892.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7783628,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1413355411.5,
            "unit": "ns",
            "extra": "gctime=330616606\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1662562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17774704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150953436.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76866836,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71b8d8cbaaa190e2a0c2abf97fd663d51bade668",
          "message": "Fix `entanglement` and introduce `concurrence` (#419)",
          "timestamp": "2025-02-20T21:58:34+01:00",
          "tree_id": "8aecfa5aece96b9173185b0a18e5838f48185334",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/71b8d8cbaaa190e2a0c2abf97fd663d51bade668"
        },
        "date": 1740104157029,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6724283.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 602446932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80780683,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 28293469.5,
            "unit": "ns",
            "extra": "gctime=8655684.5\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43104984,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7866493,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1397550906.5,
            "unit": "ns",
            "extra": "gctime=330144460.5\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1671664.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17817447,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152513080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77776856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d352f9012c94bb96f82fa3804f3ef3b39b4a266",
          "message": "Align `steadystate` ODE solver and improve GPU support (#421)",
          "timestamp": "2025-02-22T10:59:50+09:00",
          "tree_id": "d5bfdbe2662334da32fd2103ca43fe9ceae53f39",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/2d352f9012c94bb96f82fa3804f3ef3b39b4a266"
        },
        "date": 1740190141916,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6755181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600190315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80510195,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 29681537,
            "unit": "ns",
            "extra": "gctime=9188852\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42788009,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7689969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1383841724,
            "unit": "ns",
            "extra": "gctime=326944874.5\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1662515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17704687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151849105.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76710720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba32a265b28e5bcb7389b0b4f20375c6470b1ce9",
          "message": "Update dependabot.yml",
          "timestamp": "2025-02-25T00:41:43+09:00",
          "tree_id": "8e72c36a7c0e347c07c52e48f06211318a5be13e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/ba32a265b28e5bcb7389b0b4f20375c6470b1ce9"
        },
        "date": 1740539243911,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6886512,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596336003,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80476367,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 30223869.5,
            "unit": "ns",
            "extra": "gctime=9822343\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43877138.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7828478,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1411977956,
            "unit": "ns",
            "extra": "gctime=317978638.5\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1670803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17884360.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 153417000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77931339,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "157601901+TendonFFF@users.noreply.github.com",
            "name": "Li-Xun Cai",
            "username": "TendonFFF"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5b770f3368dab13beff4cdf4cc6cb577a6c488f",
          "message": "Introduce `plot_fock_distribution` (#428)",
          "timestamp": "2025-03-07T13:17:17+08:00",
          "tree_id": "0732cb8753ba270684dc52650cf5a5d05435abe3",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/b5b770f3368dab13beff4cdf4cc6cb577a6c488f"
        },
        "date": 1741325116498,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6898396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599871864,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67203170,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 30263271.5,
            "unit": "ns",
            "extra": "gctime=9440431\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43897702,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7848889,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1406430714.5,
            "unit": "ns",
            "extra": "gctime=335657111.5\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1659985.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17947123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151373444,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76850548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c2688850740cef0fc7bf445de5d5b2a0f305924",
          "message": "Bump version to `v0.29.1` (#431)",
          "timestamp": "2025-03-07T16:11:17+08:00",
          "tree_id": "ed2788219311c5f8e3ad5ec0b3bc72c54b488523",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/1c2688850740cef0fc7bf445de5d5b2a0f305924"
        },
        "date": 1741570419073,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6839572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598434148,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 67514174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 32541555,
            "unit": "ns",
            "extra": "gctime=10536150\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43097813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7678605.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1411513017.5,
            "unit": "ns",
            "extra": "gctime=333674943.5\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1664483,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17744800.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151142516.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77354203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f5e21b94c22f3009d61e78ae9e64e10b63f87eb",
          "message": "Bump crate-ci/typos from 1.30.1 to 1.30.2 (#434)",
          "timestamp": "2025-03-18T10:00:39+08:00",
          "tree_id": "2b96fb133e24c6e8aad03f6dbfa46fdfe067b3b7",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5f5e21b94c22f3009d61e78ae9e64e10b63f87eb"
        },
        "date": 1742533903098,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7006234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603467741,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79526337,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 30063049,
            "unit": "ns",
            "extra": "gctime=9367637\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42868613,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7660729.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1407013333,
            "unit": "ns",
            "extra": "gctime=330131594\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1635937,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17769411,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151024289.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77587187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14b3de581d37cc2489fe233357199d6a46600bec",
          "message": "Bump crate-ci/typos from 1.31.0 to 1.31.1 (#441)\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-07T08:56:09+02:00",
          "tree_id": "5b6779edcf346292e5625cf44234af64b90ab2e5",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/14b3de581d37cc2489fe233357199d6a46600bec"
        },
        "date": 1744076564657,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7024679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601587328,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79053172,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 31658596,
            "unit": "ns",
            "extra": "gctime=10355797\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42665801.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7653717,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1444452728,
            "unit": "ns",
            "extra": "gctime=342040156\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1642298,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17675039.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151703679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77460383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4122097d18d824bd99c0628b75dda5cfe8b4b9e",
          "message": "[Doc] Add a list of recommended packages in main page (#445)",
          "timestamp": "2025-04-10T13:46:49+02:00",
          "tree_id": "fc932bd6d61b858dad85c9c3787d97258debc3fd",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e4122097d18d824bd99c0628b75dda5cfe8b4b9e"
        },
        "date": 1744377204732,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6919002,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597806334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 68026291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 33993896,
            "unit": "ns",
            "extra": "gctime=11366619\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43104061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7710459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1390808224,
            "unit": "ns",
            "extra": "gctime=336670611\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1650283.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17847734,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151742471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77255224,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a07b9918ca0f965510af60552688ba4dce7c7d15",
          "message": "Add support to automatic differentiation for `sesolve` and `mesolve` (#440)",
          "timestamp": "2025-04-12T14:49:03+09:00",
          "tree_id": "12a0429be8db7835715a6bdfe9b77223aba955f0",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/a07b9918ca0f965510af60552688ba4dce7c7d15"
        },
        "date": 1744438001308,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7008909,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500456\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 595940435,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091440\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 68224179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3660592\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 30893731,
            "unit": "ns",
            "extra": "gctime=9683442\nmemory=121492424\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42914924.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4811184\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7695165,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852008\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1383508028.5,
            "unit": "ns",
            "extra": "gctime=330966344.5\nmemory=2719158672\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1654291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75424\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17684238,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3244704\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152383295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3327216\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76990942,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328512\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b5e86efb5ca00a65277a4b02bda07531cd529cf",
          "message": "Bump to v0.30.1 (#454)",
          "timestamp": "2025-04-24T23:58:33+02:00",
          "tree_id": "ddfa1e3317b352d6a1a9360e9ae27531c130b41f",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/2b5e86efb5ca00a65277a4b02bda07531cd529cf"
        },
        "date": 1745742563190,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6852187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 594124751,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79277775.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3661352\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21325951.5,
            "unit": "ns",
            "extra": "gctime=5350707\nmemory=121708248\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42504157,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7599957,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1377073848,
            "unit": "ns",
            "extra": "gctime=318649110\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1636495,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17606215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152124646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77122126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85d23efaa18525754b8516ebf9c327f9c8d9b667",
          "message": "Return `sesolve` when `mesolve` allows it (#455)",
          "timestamp": "2025-04-30T11:36:59+09:00",
          "tree_id": "5c376665e27bf09d2f3b407ec03bd57707d71351",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/85d23efaa18525754b8516ebf9c327f9c8d9b667"
        },
        "date": 1746078603459,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6846921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 589829588,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 75162712,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3661352\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21210309,
            "unit": "ns",
            "extra": "gctime=5278500\nmemory=121708248\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 41615490,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7583492.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1360547491,
            "unit": "ns",
            "extra": "gctime=325839435.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1640477,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17482062.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 148855009,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76844541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243bff734b1e13aed78847ba32a778b924c9dc8d",
          "message": "Bump to v0.31.0 (#459)",
          "timestamp": "2025-05-03T22:02:21+02:00",
          "tree_id": "94774624c56798c512e0fc9c7c5340641f9f0646",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/243bff734b1e13aed78847ba32a778b924c9dc8d"
        },
        "date": 1746356842770,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7082371,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 596775306,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80428092.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3661352\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 23374217.5,
            "unit": "ns",
            "extra": "gctime=5771444\nmemory=121708248\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42818874.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7789774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1418896876.5,
            "unit": "ns",
            "extra": "gctime=348148146.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1655709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17794439.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152495039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 82121470,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4ff0f7dd88f7aa911f0796383a86d326c85ceea",
          "message": "CompatHelper: bump compat for SciMLOperators to 0.4, (keep existing compat) (#466)",
          "timestamp": "2025-05-10T18:24:34+09:00",
          "tree_id": "d2eccc22b96474e8c0002f172a7e867b56f9b61b",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e4ff0f7dd88f7aa911f0796383a86d326c85ceea"
        },
        "date": 1747274346880,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6755674,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 602077358,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80033046.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3661352\nallocs=369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21614340,
            "unit": "ns",
            "extra": "gctime=5357043\nmemory=121708248\nallocs=104757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42997791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7773185.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1385110402.5,
            "unit": "ns",
            "extra": "gctime=326113313.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1668582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17843048,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152191973.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77791953.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fff0169a3c44fea82219f6ec62c026075b97ac8",
          "message": "Simplify `QobEvo` creation and time evolution (#477)",
          "timestamp": "2025-05-29T08:56:17+08:00",
          "tree_id": "80f58a80872419e2da29f29d0ae2fe32af899b03",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/9fff0169a3c44fea82219f6ec62c026075b97ac8"
        },
        "date": 1748516376601,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7470977,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 608502219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 70842672,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 27886286,
            "unit": "ns",
            "extra": "gctime=9353564\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43249378,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7699948,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1486022221.5,
            "unit": "ns",
            "extra": "gctime=399839758.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1647206,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17704930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151316842.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77169596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a965621b17b90a10920afa88deccb932391d12e6",
          "message": "Switch `Core` tests to \"Test Item Framework\" (#475)",
          "timestamp": "2025-06-02T11:24:29+02:00",
          "tree_id": "eb6849b187ff42f3c1dd21fef69b7bc8dd30a456",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/a965621b17b90a10920afa88deccb932391d12e6"
        },
        "date": 1748954584481,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7099152,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 604103851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79942562.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 22252527,
            "unit": "ns",
            "extra": "gctime=5537755\nmemory=121724456\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42777405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7642030,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1423479345.5,
            "unit": "ns",
            "extra": "gctime=349058964\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1636587,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17597120.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150911831,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77121622,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feroz.ahmed.mian@gmail.com",
            "name": "Feroz Ahmed Mian",
            "username": "Fe-r-oz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47deb2c2d702c3b3ca83ad3b9f6d7add5b24bffb",
          "message": "Implement Bloch Sphere rendering (#472)\n\nCo-authored-by: Alberto Mercurio <61953577+albertomercurio@users.noreply.github.com>\nCo-authored-by: Yi-Te Huang <44385685+ytdHuang@users.noreply.github.com>",
          "timestamp": "2025-06-05T09:27:38+08:00",
          "tree_id": "960a3d7e493c4aa084287bcd734f8415ae5dd154",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/47deb2c2d702c3b3ca83ad3b9f6d7add5b24bffb"
        },
        "date": 1749087334865,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6863259,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500400\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 595880705,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79776660.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 428656,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21951239.5,
            "unit": "ns",
            "extra": "gctime=5419166\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42568480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7639250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1381131900,
            "unit": "ns",
            "extra": "gctime=333207428.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1646309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17773950,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151903675,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77054992,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64ec15dea9f27fb8bae7c1558b6edcbda6c474bd",
          "message": "Improve `Bloch` sphere code structure and docs (#480)\n\nCo-authored-by: Alberto Mercurio <61953577+albertomercurio@users.noreply.github.com>",
          "timestamp": "2025-06-06T01:26:23+08:00",
          "tree_id": "9b1395fb92bf2be98a114dc6082279c0e2981d3e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/64ec15dea9f27fb8bae7c1558b6edcbda6c474bd"
        },
        "date": 1749191053492,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7056169,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 597923961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80271253,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 437143.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 24165130.5,
            "unit": "ns",
            "extra": "gctime=6379709\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42889032.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7623349,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1426194429,
            "unit": "ns",
            "extra": "gctime=355480983.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1647949,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17887571,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151494246.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76892454,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "826a03d71a24df641d5c6a2b3f16e44b09adf36d",
          "message": "Implement `Base.copy` for `AbstractQuantumObject` (#486)",
          "timestamp": "2025-06-09T07:54:56+08:00",
          "tree_id": "2e96e53621d43669bb5249f2895446e25a7a8199",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/826a03d71a24df641d5c6a2b3f16e44b09adf36d"
        },
        "date": 1749431701227,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6911188,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 595457798,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79886927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 425620.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21562356,
            "unit": "ns",
            "extra": "gctime=5315000\nmemory=121724296\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42501335,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7771888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1372173927,
            "unit": "ns",
            "extra": "gctime=341369138\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1669587,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17819876,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151103044.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77414786,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22efb110b3cd3ea0a04e95b1966285cb80dfcef0",
          "message": "Use `LScene` instead of `Axis3` for `Bloch` Sphere (#485)\n\nCo-authored-by: Yi-Te Huang <44385685+ytdHuang@users.noreply.github.com>",
          "timestamp": "2025-06-09T11:37:02+08:00",
          "tree_id": "3f18591435d657f8b579936344f46fc647d7c746",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/22efb110b3cd3ea0a04e95b1966285cb80dfcef0"
        },
        "date": 1749440600480,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7236791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 607682706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79632542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 454814.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 26545538,
            "unit": "ns",
            "extra": "gctime=7737533\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43341854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7681030,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1486510127,
            "unit": "ns",
            "extra": "gctime=412548166\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1642304.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17777805.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150900775.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76905693,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc4ecde44c69ea77969d832839332f4c555de769",
          "message": "Fix `Bloch` docstrings and improve visualization of the sphere (#487)",
          "timestamp": "2025-06-09T22:40:10+02:00",
          "tree_id": "e3419fd7c53582b83fac33bdd3774474e6b920d6",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/dc4ecde44c69ea77969d832839332f4c555de769"
        },
        "date": 1749562562545,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7029983.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598701578,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80263290,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 446272,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 27390471,
            "unit": "ns",
            "extra": "gctime=8349487\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43222440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7685822,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1431556538,
            "unit": "ns",
            "extra": "gctime=370466869.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1638379.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17793863.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150733770,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77048837,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5e8af1cca91557df525d5a267c43f6580748b33",
          "message": "CompatHelper: bump compat for Makie in [weakdeps] to 0.23, (keep existing compat) (#490)\n\nCo-authored-by: CompatHelper Julia <compathelper_noreply@julialang.org>",
          "timestamp": "2025-06-13T14:41:26+08:00",
          "tree_id": "55782d6a664c0b2dc543df22cd178d19cb245b2e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/b5e8af1cca91557df525d5a267c43f6580748b33"
        },
        "date": 1749912222539,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7135461,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 609184755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 68915829,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 458037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 26015877,
            "unit": "ns",
            "extra": "gctime=7263326\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42947132.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7707851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1430815333.5,
            "unit": "ns",
            "extra": "gctime=366305983.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1648376,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17765799,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151426984.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77696206,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3028fe0a4af5b9ec3952fbefa737e6c0e0c369b3",
          "message": "Bump version to v0.32.1 (#498)",
          "timestamp": "2025-06-24T10:13:11+08:00",
          "tree_id": "df044c7ca959c77ebcfbe287dfe86e3ea6210291",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/3028fe0a4af5b9ec3952fbefa737e6c0e0c369b3"
        },
        "date": 1750739260264,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6979355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601579102,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 68207389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 433959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 22711005,
            "unit": "ns",
            "extra": "gctime=5572571\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42729028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7624214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1403335028,
            "unit": "ns",
            "extra": "gctime=353952252.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1641584.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17644970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150894854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77183084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "157601901+TendonFFF@users.noreply.github.com",
            "name": "Li-Xun Cai",
            "username": "TendonFFF"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2ade17784e425bc72ed81eb3d6655a993baefc5",
          "message": "Excitation number restricted (`ENR`) state space implementation  (#500)",
          "timestamp": "2025-07-07T11:11:25+02:00",
          "tree_id": "0d934cf725bc293f2508f2540e6269413a2f5de7",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/a2ade17784e425bc72ed81eb3d6655a993baefc5"
        },
        "date": 1751883993737,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6781471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500400\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600404708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80049802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 437435.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 22293186,
            "unit": "ns",
            "extra": "gctime=5529808\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42665408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7651418.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1398903388,
            "unit": "ns",
            "extra": "gctime=353464139.5\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1644585,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17731021.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151763279,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328888\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77001763,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330184\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3057e3e002096e30b356fe88228c2edb58d888f8",
          "message": "Fix errors in `Julia v1.12` (#507)",
          "timestamp": "2025-07-16T16:49:40-04:00",
          "tree_id": "9e6247c34a0859c9a2ebb8af2419ec1ae318620d",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/3057e3e002096e30b356fe88228c2edb58d888f8"
        },
        "date": 1753111707096,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7016875.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600146627,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79988030.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 439549.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 22372815,
            "unit": "ns",
            "extra": "gctime=5574899\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42609292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7648128.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1447645857.5,
            "unit": "ns",
            "extra": "gctime=382322356\nmemory=2719211208\nallocs=232097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1649354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17651611.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150484717,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328904\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76664722,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330200\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc76e9f90b190fe6bd1a45f403ccbbe45539abf9",
          "message": "Bump to v0.33.0 (#508)",
          "timestamp": "2025-07-22T00:24:53-04:00",
          "tree_id": "11ea14eed43d889a3bca81cf5b972ebe43eeee37",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/bc76e9f90b190fe6bd1a45f403ccbbe45539abf9"
        },
        "date": 1753195493794,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7216968,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598088771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80386025.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 445389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 23672103.5,
            "unit": "ns",
            "extra": "gctime=5866003\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42665360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7813804,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1426665003,
            "unit": "ns",
            "extra": "gctime=393715806\nmemory=2719211480\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1674346,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17858826.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150955803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328904\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77810766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330200\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2c6d3e99435f41b8f38286f45aff2724fd20d36",
          "message": "CompatHelper: bump compat for SciMLOperators to 1, (keep existing compat) (#470)\n\nCo-authored-by: CompatHelper Julia <compathelper_noreply@julialang.org>\nCo-authored-by: Yi-Te Huang <44385685+ytdHuang@users.noreply.github.com>\nCo-authored-by: Yi-Te Huang <y.t.d.huang@phys.ncku.edu.tw>\nCo-authored-by: Alberto Mercurio <alberto.mercurio96@gmail.com>",
          "timestamp": "2025-07-25T21:54:00-04:00",
          "tree_id": "99bf3d2854821da4b1b464ede0268216099da3cb",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e2c6d3e99435f41b8f38286f45aff2724fd20d36"
        },
        "date": 1753589965426,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7006777,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 605079941,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80141102,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 450811,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 23149895,
            "unit": "ns",
            "extra": "gctime=5871647\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42827960.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7663800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1405512714,
            "unit": "ns",
            "extra": "gctime=360161203.5\nmemory=2719211480\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1667406,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17908806,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151370164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328904\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77841858.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330200\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6283feebeacbb8b0446f16e9fa39dc1d8a67fff",
          "message": "CompatHelper: bump compat for Makie in [weakdeps] to 0.24 (#513)\n\nCo-authored-by: CompatHelper Julia <compathelper_noreply@julialang.org>\nCo-authored-by: Alberto Mercurio <alberto.mercurio96@gmail.com>",
          "timestamp": "2025-07-27T17:50:21+08:00",
          "tree_id": "5e0880ef15125d0ad43eb7537f99e2ddb0d912ea",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/c6283feebeacbb8b0446f16e9fa39dc1d8a67fff"
        },
        "date": 1753610459376,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6829730,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599066824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 66847757,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 436749,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 22085788,
            "unit": "ns",
            "extra": "gctime=5496520\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42414614,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7665746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1403303631.5,
            "unit": "ns",
            "extra": "gctime=353772193.5\nmemory=2719211480\nallocs=232098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1649181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17773800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151838635,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3328904\nallocs=11787\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 76805882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3330200\nallocs=11799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ba859ac5231a58a44193dba6475c2821f8ae9c5",
          "message": "Add support to ForwarDiff differentiation (#515)",
          "timestamp": "2025-07-27T11:31:23-04:00",
          "tree_id": "795e406f6a3e7d10831759b9ca46200525592e0c",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5ba859ac5231a58a44193dba6475c2821f8ae9c5"
        },
        "date": 1753635130993,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6789689,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 601673135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 70036053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 435195,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21678645.5,
            "unit": "ns",
            "extra": "gctime=5370529.5\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42657367,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7628393.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1386464955.5,
            "unit": "ns",
            "extra": "gctime=344112637.5\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1647638.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17685567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152366946,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78512562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13709a17a1269f45dba6742843d75bdd76c8653f",
          "message": "Bump to v0.34.0 (#518)",
          "timestamp": "2025-07-29T16:21:00+02:00",
          "tree_id": "5b074898a55f461549bd0c33eba77bd36ecae351",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/13709a17a1269f45dba6742843d75bdd76c8653f"
        },
        "date": 1753878632575,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6930516,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603963291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80347778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 449972,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 23075806,
            "unit": "ns",
            "extra": "gctime=5873176\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42868836.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7626358,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1448401226.5,
            "unit": "ns",
            "extra": "gctime=383416388.5\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1687506,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 18199914.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151175633.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78319716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "157601901+TendonFFF@users.noreply.github.com",
            "name": "Li-Xun Cai",
            "username": "TendonFFF"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5110d93ce0389d116d30c88984c6267d03112023",
          "message": "Improve Bloch sphere rendering for animation (#520)",
          "timestamp": "2025-08-08T11:42:09+02:00",
          "tree_id": "ca5a10872a53d7d586e12dbeb9f2b0dd29dc2512",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5110d93ce0389d116d30c88984c6267d03112023"
        },
        "date": 1754794514198,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7008922.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598745066,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 74623811,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 452413,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 23223236,
            "unit": "ns",
            "extra": "gctime=5946583.5\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42754327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7646008,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852288\nallocs=721\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1389660811.5,
            "unit": "ns",
            "extra": "gctime=338025367.5\nmemory=2719211432\nallocs=232100\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1644055,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75544\nallocs=96\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17812494,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245584\nallocs=617\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152327584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13698008\nallocs=14595\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78008893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13699304\nallocs=14607\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7df5a7c3444e8d3808eef7a7fbbae55ed9fb32c",
          "message": "Bump crate-ci/typos from 1.35.4 to 1.35.5 (#535)\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-26T08:24:39+08:00",
          "tree_id": "fdaea9b253531b791ec2b3df6e7b8b89ab7361a1",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/f7df5a7c3444e8d3808eef7a7fbbae55ed9fb32c"
        },
        "date": 1756433030646,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6933570.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 593147870,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 66487688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 441099,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 24547153,
            "unit": "ns",
            "extra": "gctime=6534075\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42566312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7643058,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1345105754.5,
            "unit": "ns",
            "extra": "gctime=349506244\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1656414,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17750998,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152898430,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78043865.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "157601901+TendonFFF@users.noreply.github.com",
            "name": "Li-Xun Cai",
            "username": "TendonFFF"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15954c9bf89e87b4fe94f785aeef1247337a9f00",
          "message": "Add `QobjEvo` support for `SteadyStateODESolver` (#536)\n\nCo-authored-by: cailixun <cailixun23@gmail.com>",
          "timestamp": "2025-08-29T13:40:22+08:00",
          "tree_id": "9e94a4c39241d891df5abbdcf3e043f8bc6a765e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/15954c9bf89e87b4fe94f785aeef1247337a9f00"
        },
        "date": 1756449358772,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6997399,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599573534,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 68260099.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 454476,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 25748484,
            "unit": "ns",
            "extra": "gctime=7121473\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42765151,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7671724.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1377283678,
            "unit": "ns",
            "extra": "gctime=358996960.5\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1636963,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17765694,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152404617,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78036924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75f33c468cabba15f020e42777c1471776071312",
          "message": "Fix keyword argument handling for `SteadyStateODESolver` (#537)",
          "timestamp": "2025-09-01T09:04:01+02:00",
          "tree_id": "1df2f97ebdc7debfbd3e69e563d1f1adb07a8f98",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/75f33c468cabba15f020e42777c1471776071312"
        },
        "date": 1756793393431,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7372712,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 604306231,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80417300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662392\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 472332,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 29904564.5,
            "unit": "ns",
            "extra": "gctime=10237921.5\nmemory=121724248\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42969703,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7722815,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1494351970,
            "unit": "ns",
            "extra": "gctime=397895496.5\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1647082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17829103,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 151350722,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78040006,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c986d846a1b0cbc2ee4428b66f8a25de358c6b98",
          "message": "Bump crate-ci/typos from 1.35.5 to 1.36.2 (#542)\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-08T09:12:34+02:00",
          "tree_id": "ed0d00ea39d9521e9e717d5dc55ac12f79580a1a",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/c986d846a1b0cbc2ee4428b66f8a25de358c6b98"
        },
        "date": 1758885669640,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6901637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 599152148,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80154409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662424\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 435036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 21910293,
            "unit": "ns",
            "extra": "gctime=5643442.5\nmemory=121740392\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42421971,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7638450,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1381819901,
            "unit": "ns",
            "extra": "gctime=338958968\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1654403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17667968,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152339528,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77745524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64a727c4b1d8756746410268f70ce9f38cc20bf9",
          "message": "Improve `QuantumObjectEvolution` generation function and fix `smesolve` type instabilities (#548)",
          "timestamp": "2025-09-28T10:01:13+08:00",
          "tree_id": "07df2f175a97d9af374883e75d923d3f32c496b8",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/64a727c4b1d8756746410268f70ce9f38cc20bf9"
        },
        "date": 1759025375830,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6968441,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 598671421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80351270,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 468051,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 25409342,
            "unit": "ns",
            "extra": "gctime=7106491.5\nmemory=121740264\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42953311.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7647601.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1431706855,
            "unit": "ns",
            "extra": "gctime=374134927.5\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1634386,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17795373,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 150922064.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78276780,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d6922a8ca471c61416f8e8c66ac9d2dc8359520",
          "message": "Fix typo in `cite` (#551)",
          "timestamp": "2025-09-29T20:07:04+02:00",
          "tree_id": "4de6a79dc59ebbf3a308d727c91c79dc3a870c83",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/8d6922a8ca471c61416f8e8c66ac9d2dc8359520"
        },
        "date": 1759480950638,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7056494,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 605572304,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 75180353.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 452034,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 23780088,
            "unit": "ns",
            "extra": "gctime=6102756\nmemory=121740280\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42896064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7673952.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1481732323.5,
            "unit": "ns",
            "extra": "gctime=410566111\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1650742,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17810669.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152715282,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78495592.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "894213b9925121501f910a792a496485c195e441",
          "message": "Fix `cite()` bibtex output (#552)",
          "timestamp": "2025-10-06T13:15:22+02:00",
          "tree_id": "8c1670fe7d79a6c108ef3ce235cc63b0484075ae",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/894213b9925121501f910a792a496485c195e441"
        },
        "date": 1759891219864,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 6815598,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500368\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600215814,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80220780,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 438360.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955600\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 22498049.5,
            "unit": "ns",
            "extra": "gctime=5814713\nmemory=121740312\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42505271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813312\nallocs=1036\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7797273,
            "unit": "ns",
            "extra": "gctime=0\nmemory=852160\nallocs=714\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1387037728,
            "unit": "ns",
            "extra": "gctime=346260033\nmemory=2719211352\nallocs=232096\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1662840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17753123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245504\nallocs=613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 153998726,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677208\nallocs=14195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78211193.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678504\nallocs=14207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a4f8a2728c73e08a5438c7103cfa8b1145b2741",
          "message": "Use Julia 1.11 for documentation build (#561)",
          "timestamp": "2025-10-12T10:03:34+08:00",
          "tree_id": "57e2ad6f3df5cfd57fdaa1af12d34c737c954c9e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5a4f8a2728c73e08a5438c7103cfa8b1145b2741"
        },
        "date": 1760235493853,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 4012302,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8726976\nallocs=602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 725977691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4145784\nallocs=440\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 6912748,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10500256\nallocs=484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 612500898,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091496\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80621032,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 443959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=955440\nallocs=580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 28837095.5,
            "unit": "ns",
            "extra": "gctime=10911769.5\nmemory=121740232\nallocs=105757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 43048025.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4813136\nallocs=1034\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 8460161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=851760\nallocs=710\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 46153575.5,
            "unit": "ns",
            "extra": "gctime=9143182.5\nmemory=91499688\nallocs=32768\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 671256897.5,
            "unit": "ns",
            "extra": "gctime=76113250.5\nmemory=698793928\nallocs=2371720\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 361227089.5,
            "unit": "ns",
            "extra": "gctime=62403368.5\nmemory=692762104\nallocs=2350976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1382094156,
            "unit": "ns",
            "extra": "gctime=327604791.5\nmemory=2699066008\nallocs=52845\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1836720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75336\nallocs=90\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 20521531,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3245120\nallocs=611\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 165558388,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13643912\nallocs=13805\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 86602811.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13644888\nallocs=13817\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 48407105,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28104\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 52072869,
            "unit": "ns",
            "extra": "gctime=0\nmemory=29896\nallocs=137\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 1003216720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2972752\nallocs=736\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 1001665628,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2974912\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 1039271327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1953856\nallocs=547\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 5471288291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14273480\nallocs=19848\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2900597322,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14274456\nallocs=19860\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4848171821.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14042728\nallocs=18354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2448935494,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14043704\nallocs=18366\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b68373bea7cd5ccd93dbd852961ec9caee097ed2",
          "message": "Bump to v0.37.0 (#563)",
          "timestamp": "2025-10-12T12:50:56+02:00",
          "tree_id": "63899f0d3c3f31256ab695340414d832eacf9260",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/b68373bea7cd5ccd93dbd852961ec9caee097ed2"
        },
        "date": 1760267272999,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 3903674,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8749192\nallocs=615\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 726451078,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4168000\nallocs=453\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 6706627,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10522456\nallocs=497\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 613842609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091496\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80719666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 433023,
            "unit": "ns",
            "extra": "gctime=0\nmemory=958136\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 26363674.5,
            "unit": "ns",
            "extra": "gctime=9313015.5\nmemory=121742928\nallocs=105768\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42839267,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4815832\nallocs=1045\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 8429004,
            "unit": "ns",
            "extra": "gctime=0\nmemory=854456\nallocs=721\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 40656946,
            "unit": "ns",
            "extra": "gctime=5168430\nmemory=90530232\nallocs=33262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 631533532.5,
            "unit": "ns",
            "extra": "gctime=62715090\nmemory=687918208\nallocs=2334797\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 336610246,
            "unit": "ns",
            "extra": "gctime=44552541\nmemory=699723320\nallocs=2374888\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1339094883.5,
            "unit": "ns",
            "extra": "gctime=301560177\nmemory=2712879272\nallocs=53509\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1848218,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75336\nallocs=90\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 20535977.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3250824\nallocs=624\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 165161301,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13643912\nallocs=13805\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 85926506,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13644888\nallocs=13817\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 47067045,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28104\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 47397782,
            "unit": "ns",
            "extra": "gctime=0\nmemory=29896\nallocs=137\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 1090603271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2978008\nallocs=746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 999373195,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2980152\nallocs=781\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 1002009118,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1959112\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 5534723296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14273480\nallocs=19848\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2872711514,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14274456\nallocs=19860\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4721435481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14042728\nallocs=18354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2438406325,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14043704\nallocs=18366\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d44d251f7e901726a1bbcf234a528aa420417a93",
          "message": "Introduce new methods of `sesolve_map` and `mesolve_map` for advanced usage (#565)",
          "timestamp": "2025-10-13T23:06:49+02:00",
          "tree_id": "0eccb76302318012b7c97f6c35e6aa6900db12a0",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/d44d251f7e901726a1bbcf234a528aa420417a93"
        },
        "date": 1760763014936,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 4329005,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8749336\nallocs=615\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 731963379,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4168304\nallocs=455\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 8452561.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10522584\nallocs=497\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Zygote)",
            "value": 259796668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147250200\nallocs=1472509\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Forward",
            "value": 32824265,
            "unit": "ns",
            "extra": "gctime=0\nmemory=157856\nallocs=370\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Enzyme)",
            "value": 265533887.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=145750880\nallocs=1441595\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Zygote)",
            "value": 632478717,
            "unit": "ns",
            "extra": "gctime=76868719\nmemory=621820968\nallocs=784473\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Forward",
            "value": 202069398,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4129864\nallocs=829\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Enzyme)",
            "value": 605064512,
            "unit": "ns",
            "extra": "gctime=66077978\nmemory=619865728\nallocs=735846\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 668652740.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 78105378,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 531749,
            "unit": "ns",
            "extra": "gctime=0\nmemory=958296\nallocs=591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 36648182,
            "unit": "ns",
            "extra": "gctime=12846409\nmemory=121742960\nallocs=105768\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 50109033,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4816008\nallocs=1047\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7704292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=854856\nallocs=725\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 65605205,
            "unit": "ns",
            "extra": "gctime=12762189\nmemory=90342440\nallocs=31968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 658289359.5,
            "unit": "ns",
            "extra": "gctime=78501888\nmemory=658736312\nallocs=2178607\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 393683541,
            "unit": "ns",
            "extra": "gctime=88629946\nmemory=670960384\nallocs=2218982\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1940159651,
            "unit": "ns",
            "extra": "gctime=629970584\nmemory=2733024616\nallocs=232760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1567112,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 18277646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3251208\nallocs=626\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 147787783.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677560\nallocs=14199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 77140229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678856\nallocs=14211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 42880249,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28248\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 42869590,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30168\nallocs=141\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 835818115.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2978440\nallocs=748\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 834442560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2980712\nallocs=785\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 834774651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1959464\nallocs=559\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 4767011219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14334328\nallocs=21142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2444601343,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14335624\nallocs=21154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4334495419.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14097304\nallocs=19450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2185287140,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14098600\nallocs=19462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1df950cc2f0d7438d2863eb2a1ea5d92b4e7c064",
          "message": "Use `Base.depwarn` for deprecated functionality (#570)",
          "timestamp": "2025-10-25T13:25:48+08:00",
          "tree_id": "7ff6e2c4c0dbfa9ca79969711df9f2fea42d5f6b",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/1df950cc2f0d7438d2863eb2a1ea5d92b4e7c064"
        },
        "date": 1761391190480,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 3926231,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8511024\nallocs=583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 621647028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3929992\nallocs=423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 6989280.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284272\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Zygote)",
            "value": 274031586.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=146571672\nallocs=1465783\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Forward",
            "value": 23228688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=157856\nallocs=370\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Enzyme)",
            "value": 267940016.5,
            "unit": "ns",
            "extra": "gctime=8600239\nmemory=145503984\nallocs=1439117\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Zygote)",
            "value": 616895164,
            "unit": "ns",
            "extra": "gctime=62084064\nmemory=621157608\nallocs=783717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Forward",
            "value": 135306681,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4036800\nallocs=797\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Enzyme)",
            "value": 593354753,
            "unit": "ns",
            "extra": "gctime=54164526\nmemory=619205136\nallocs=735090\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600083284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 81038760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 456699,
            "unit": "ns",
            "extra": "gctime=0\nmemory=935968\nallocs=563\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 29122265.5,
            "unit": "ns",
            "extra": "gctime=9267605.5\nmemory=121720632\nallocs=105740\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42905765.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4793680\nallocs=1019\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7659293,
            "unit": "ns",
            "extra": "gctime=0\nmemory=832528\nallocs=697\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 44190181,
            "unit": "ns",
            "extra": "gctime=8103525\nmemory=85951768\nallocs=30752\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 653206086.5,
            "unit": "ns",
            "extra": "gctime=66508500.5\nmemory=659777424\nallocs=2182050\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 369801533,
            "unit": "ns",
            "extra": "gctime=74602882\nmemory=671242080\nallocs=2219906\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1338304840.5,
            "unit": "ns",
            "extra": "gctime=307211153\nmemory=2593819480\nallocs=231146\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1642659,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17763905,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3101600\nallocs=594\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 152500349,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677560\nallocs=14199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78482071,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678856\nallocs=14211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 44469886,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28248\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 43305145,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30168\nallocs=141\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 863507207.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2828832\nallocs=716\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 863837014,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2831104\nallocs=753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 865091019.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1809856\nallocs=527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 4950346940.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14334328\nallocs=21142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2467127763,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14335624\nallocs=21154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4257011179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14097304\nallocs=19450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2148495053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14098600\nallocs=19462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d7a3692d019ddce1ed6412e54bd97eed15f090",
          "message": "Use ProgressMeter.jl rather than internal implementation (#569)",
          "timestamp": "2025-10-25T14:24:20+02:00",
          "tree_id": "95b54c16e43f34581f3696c9838925eac124fdb0",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/a3d7a3692d019ddce1ed6412e54bd97eed15f090"
        },
        "date": 1761410823877,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 3933740,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8511024\nallocs=583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 616475607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3929992\nallocs=423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 6995166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284272\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Zygote)",
            "value": 268929307.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=146571672\nallocs=1465783\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Forward",
            "value": 22325964,
            "unit": "ns",
            "extra": "gctime=0\nmemory=157856\nallocs=370\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Enzyme)",
            "value": 269391586.5,
            "unit": "ns",
            "extra": "gctime=8841336.5\nmemory=145503424\nallocs=1439112\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Zygote)",
            "value": 611813816,
            "unit": "ns",
            "extra": "gctime=58128594\nmemory=621157608\nallocs=783717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Forward",
            "value": 135110430,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4036800\nallocs=797\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Enzyme)",
            "value": 588426903,
            "unit": "ns",
            "extra": "gctime=49292202\nmemory=619205056\nallocs=735090\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 603930114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 79820973,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3662552\nallocs=442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 464706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=935968\nallocs=563\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 28466876,
            "unit": "ns",
            "extra": "gctime=8672863\nmemory=121720632\nallocs=105740\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42949435.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4793680\nallocs=1019\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7659688.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=832528\nallocs=697\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 44018976,
            "unit": "ns",
            "extra": "gctime=7949353\nmemory=85951768\nallocs=30752\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 662556130.5,
            "unit": "ns",
            "extra": "gctime=70939009.5\nmemory=661802520\nallocs=2188479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 367292533.5,
            "unit": "ns",
            "extra": "gctime=73064281.5\nmemory=673316912\nallocs=2226764\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1282194199,
            "unit": "ns",
            "extra": "gctime=302531307\nmemory=2593819480\nallocs=231146\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1658322,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17818868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3101600\nallocs=594\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 155365754,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677560\nallocs=14199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78451058.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678856\nallocs=14211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 45410420.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28248\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 44319106,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30168\nallocs=141\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 866888187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2828832\nallocs=716\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 867656240.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2831104\nallocs=753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 865672939,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1809856\nallocs=527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 4871991507.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14334328\nallocs=21142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2567813559,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14335624\nallocs=21154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4278160586,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14097304\nallocs=19450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2194554687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14098600\nallocs=19462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e47620ef32c5d997b1817fb2f682eb26e8f1bd8c",
          "message": "Add support for arbitrary precision computations (#576)",
          "timestamp": "2025-10-27T02:30:58+01:00",
          "tree_id": "3b0b01c52ad24cbe62979ac486a83423c5eefd63",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/e47620ef32c5d997b1817fb2f682eb26e8f1bd8c"
        },
        "date": 1761529878141,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 3858298,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8511024\nallocs=583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 622885788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3929992\nallocs=423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 6803668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284272\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Zygote)",
            "value": 267278360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=146571672\nallocs=1465783\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Forward",
            "value": 23381327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=157856\nallocs=370\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Enzyme)",
            "value": 270946801,
            "unit": "ns",
            "extra": "gctime=10567761\nmemory=145503696\nallocs=1439116\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Zygote)",
            "value": 606099009,
            "unit": "ns",
            "extra": "gctime=59008383\nmemory=621157608\nallocs=783717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Forward",
            "value": 137919162,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4036800\nallocs=797\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Enzyme)",
            "value": 582838256,
            "unit": "ns",
            "extra": "gctime=49599481\nmemory=619205136\nallocs=735090\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 594579083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 65827036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3315952\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 443464,
            "unit": "ns",
            "extra": "gctime=0\nmemory=935968\nallocs=563\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 26234913,
            "unit": "ns",
            "extra": "gctime=8000420.5\nmemory=121720632\nallocs=105740\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42587353,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4793680\nallocs=1019\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7820819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=832528\nallocs=697\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 43847029,
            "unit": "ns",
            "extra": "gctime=8035775\nmemory=85951768\nallocs=30752\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 659594427,
            "unit": "ns",
            "extra": "gctime=70139847.5\nmemory=660949616\nallocs=2185918\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 377925876,
            "unit": "ns",
            "extra": "gctime=77701583\nmemory=670811352\nallocs=2218489\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1288283789.5,
            "unit": "ns",
            "extra": "gctime=306545979\nmemory=2593819480\nallocs=231146\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1679710,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17916456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3101600\nallocs=594\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 153667749,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677560\nallocs=14199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78679565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678856\nallocs=14211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 43304553,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28248\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 44304117,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30168\nallocs=141\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 876479719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2828832\nallocs=716\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 875837974.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2831104\nallocs=753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 874374500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1809856\nallocs=527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 4874564843,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14334328\nallocs=21142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2536990189,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14335624\nallocs=21154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4351022617.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14097304\nallocs=19450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2206097411,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14098600\nallocs=19462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "726559817f5ff3472e51daa0ac847b35a19f5fd3",
          "message": "Allow customizing progress bar and bump to `v0.38.1` (#579)",
          "timestamp": "2025-10-27T18:00:47+08:00",
          "tree_id": "4856a59a63ad8a602ae9c7b4541042117a428c24",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/726559817f5ff3472e51daa0ac847b35a19f5fd3"
        },
        "date": 1761587096687,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 3968389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8511024\nallocs=583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 616026760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3929992\nallocs=423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 6936015,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10284272\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Zygote)",
            "value": 269085823,
            "unit": "ns",
            "extra": "gctime=0\nmemory=146571672\nallocs=1465783\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Forward",
            "value": 22398057,
            "unit": "ns",
            "extra": "gctime=0\nmemory=157856\nallocs=370\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Enzyme)",
            "value": 268353068,
            "unit": "ns",
            "extra": "gctime=10188968\nmemory=145503696\nallocs=1439116\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Zygote)",
            "value": 630394512,
            "unit": "ns",
            "extra": "gctime=69658046\nmemory=621157608\nallocs=783717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Forward",
            "value": 135400670,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4036800\nallocs=797\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Enzyme)",
            "value": 607579182,
            "unit": "ns",
            "extra": "gctime=63706155\nmemory=619205136\nallocs=735090\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 606888469,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 80374309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3315952\nallocs=434\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 462840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=935968\nallocs=563\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 27514480,
            "unit": "ns",
            "extra": "gctime=8083138\nmemory=121720648\nallocs=105740\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 42967103,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4793680\nallocs=1019\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7680691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=832528\nallocs=697\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 44862057,
            "unit": "ns",
            "extra": "gctime=8157502.5\nmemory=85951768\nallocs=30752\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 677738810,
            "unit": "ns",
            "extra": "gctime=74527434\nmemory=671854432\nallocs=2221932\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 375420172,
            "unit": "ns",
            "extra": "gctime=81115329\nmemory=671627064\nallocs=2219757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1333437582,
            "unit": "ns",
            "extra": "gctime=314697160.5\nmemory=2593819480\nallocs=231146\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1655232,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75464\nallocs=92\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 17924549,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3101600\nallocs=594\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 153619671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13677560\nallocs=14199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 78264084.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13678856\nallocs=14211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 44916048,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28248\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 43943352.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30168\nallocs=141\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 871379991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2828832\nallocs=716\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 870475687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2831104\nallocs=753\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 869583962,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1809856\nallocs=527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 4887583551.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14334328\nallocs=21142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2520751255.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14335624\nallocs=21154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4332782163,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14097304\nallocs=19450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2174086423,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14098600\nallocs=19462\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "402c27a80b8a1f1f1d288450ae18f2ddc24def37",
          "message": "Add keyword argument `assume_hermitian` to `liouvillian` (#581)\n\nCo-authored-by: Alberto Mercurio <61953577+albertomercurio@users.noreply.github.com>\nCo-authored-by: Alberto Mercurio <alberto.mercurio96@gmail.com>",
          "timestamp": "2025-11-14T18:26:13+01:00",
          "tree_id": "def1a68954173d7c4c331bf44171adb770c2fe34",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/402c27a80b8a1f1f1d288450ae18f2ddc24def37"
        },
        "date": 1763178159364,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Iterative",
            "value": 4256251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8669408\nallocs=607\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/ODE",
            "value": 660635955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4088104\nallocs=438\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steadystate/Direct",
            "value": 8162628,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10442384\nallocs=480\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Zygote)",
            "value": 311992815,
            "unit": "ns",
            "extra": "gctime=0\nmemory=162862376\nallocs=1692097\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Forward",
            "value": 35915342,
            "unit": "ns",
            "extra": "gctime=0\nmemory=154344\nallocs=364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/sesolve/Reverse (Enzyme)",
            "value": 313956738.5,
            "unit": "ns",
            "extra": "gctime=11397221\nmemory=161263232\nallocs=1659103\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Zygote)",
            "value": 590543299,
            "unit": "ns",
            "extra": "gctime=76244531\nmemory=594088440\nallocs=595143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Forward",
            "value": 203657015,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4098464\nallocs=812\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Autodiff/mesolve/Reverse (Enzyme)",
            "value": 549671057.5,
            "unit": "ns",
            "extra": "gctime=55109360.5\nmemory=592135904\nallocs=546527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 629235882.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20091528\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 10788927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3939328\nallocs=461\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Lanczos",
            "value": 530582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=950480\nallocs=576\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Pseudo Inverse",
            "value": 37470441,
            "unit": "ns",
            "extra": "gctime=12162468\nmemory=121895160\nallocs=112754\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Spectrum/Exponential Series",
            "value": 46091323.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4808192\nallocs=1032\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 7744356,
            "unit": "ns",
            "extra": "gctime=0\nmemory=847040\nallocs=710\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mesolve",
            "value": 64507945,
            "unit": "ns",
            "extra": "gctime=12126694\nmemory=89087832\nallocs=31322\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Serial",
            "value": 687926263,
            "unit": "ns",
            "extra": "gctime=80589715\nmemory=660189648\nallocs=2183287\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Shifted Fock/mcsolve/Multithreaded",
            "value": 403237495,
            "unit": "ns",
            "extra": "gctime=93778956\nmemory=675967256\nallocs=2235406\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1904606140,
            "unit": "ns",
            "extra": "gctime=631851356\nmemory=2686518296\nallocs=231896\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 1777850,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71184\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 18287319,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3200704\nallocs=609\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 162445577,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13795600\nallocs=14893\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 84133866.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13796896\nallocs=14905\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/QobjEvo",
            "value": 47412781,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21464\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/sesolve/Tuple",
            "value": 47326359.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23384\nallocs=117\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/QobjEvo",
            "value": 840953607.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2928384\nallocs=734\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Tuple",
            "value": 842236377.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2930672\nallocs=771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mesolve/Liouvillian",
            "value": 841785668.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1909408\nallocs=545\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Serial",
            "value": 5216848997,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14362760\nallocs=23413\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/QobjEvo/Multithreaded",
            "value": 2681873213.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14364056\nallocs=23425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Serial",
            "value": 4518979152,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14159976\nallocs=21126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-dependent/mcsolve/Tuple/Multithreaded",
            "value": 2375717007,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14161272\nallocs=21138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}